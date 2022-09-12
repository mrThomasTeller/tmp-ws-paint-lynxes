require('@babel/register');

const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { getCanvas } = require('./canvas');
const reactSsrMiddleware = require('./middlewares/reactSsr');
const Main = require('./views/Main');
const createSocketServer = require('./socket');

const server = createServer();
const app = express();

app.use(reactSsrMiddleware);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.renderComponent(Main, { canvas: getCanvas() });
});

// app.post('/api/paint', (req, res) => {
//   changeCanvas(req.body.row, req.body.col, req.body.color);
//   res.json({ success: true });
// });

// сервер будет перенаправлять все запросы на express-приложение
server.on('request', app);
server.listen(process.env.PORT ?? 3000, () => console.log('server started'));

createSocketServer(server);
