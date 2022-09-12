const ReactDOMServer = require('react-dom/server');
const React = require('react');

function renderComponent(reactComponent, props, options = { doctype: true }) {
  const element = React.createElement(reactComponent, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  if (options.doctype) this.write('<!DOCTYPE html>');
  this.end(html);
}

function reactSsrMiddleware(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = reactSsrMiddleware;
