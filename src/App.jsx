import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }
  render() {
    return (
      <div>
        <header>
          <h1> color picker </h1>
          <h2>
            <button>new color</button>
          </h2>
        </header>
        <section className="h">
          H: <input type="range" min="0" max="360"></input>
        </section>
        <section className="s">
          S: <input type="range" min="0" max="100"></input>
        </section>
        <section className="l">
          L: <input type="range" min="0" max="100"></input>
        </section>
        <div className="color"> color:</div>

        <span>
          <p></p>
        </span>
      </div>
    )
  }
}
