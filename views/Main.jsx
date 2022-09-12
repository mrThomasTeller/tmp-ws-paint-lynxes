/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
const React = require('react');
const Layout = require('./Layout');

const colors = [
  '#000000',
  '#808080',
  '#c0c0c0',
  '#ff00ff',
  '#800080',
  '#ff0000',
  '#800000',
  '#ffff00',
  '#808000',
  '#00ff00',
  '#008000',
  '#00ffff',
  '#008080',
  '#0000ff',
  '#000080',
];

function Main({ canvas }) {
  const color = colors[Math.floor(Math.random() * colors.length)] ?? 'black';

  return (
    <Layout>
      <div className="container">
        <div className="header">
          <h1>Paint</h1>
          <input type="color" id="color-picker" defaultValue={color} />
        </div>

        <div className="canvas">
          {canvas.map((row, i) => (
            <div key={i} className="row">
              {row.map((cell, j) => (
                <button
                  key={j}
                  className="cell"
                  style={{ backgroundColor: cell }}
                  type="button"
                  data-row={i}
                  data-col={j}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Main;
