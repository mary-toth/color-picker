import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }

  handleNewColorButton = event => {
    this.setState({ hue: Math.floor(Math.random() * 360) })
    this.setState({ saturation: Math.floor(Math.random() * 100) })
    this.setState({ lightness: Math.floor(Math.random() * 100) })
  }

  render() {
    return (
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Overpass:wght@100&display=swap');
        </style>
        <header>
          <h1> color picker </h1>
        </header>
        <h2>
          <button onClick={this.handleNewColorButton}>
            give me a random color
          </button>
        </h2>
        <section className="h">
          H: {this.state.hue}{' '}
          <input
            type="range"
            min="0"
            max="360"
            list="tickmarks"
            value={this.state.hue}
            onChange={event => this.setState({ hue: event.target.value })}
          ></input>
        </section>
        <section className="s">
          S: {this.state.saturation}
          <input
            type="range"
            min="0"
            max="100"
            list="tickmarks100"
            value={this.state.saturation}
            onChange={event =>
              this.setState({ saturation: event.target.value })
            }
          ></input>
        </section>
        <section className="l">
          L: {this.state.lightness}{' '}
          <input
            type="range"
            min="0"
            max="100"
            list="tickmarks100"
            value={this.state.lightness}
            onChange={event => this.setState({ lightness: event.target.value })}
          ></input>
        </section>
        <datalist id="tickmarks">
          <option value="0" label="0"></option>
          <option value="180" label="180"></option>
          <option value="360" label="360"></option>
        </datalist>
        <datalist id="tickmarks100">
          <option value="0" label="0"></option>
          <option value="50" label="50"></option>
          <option value="100" label="100"></option>
        </datalist>

        <div className="color">
          {' '}
          hsl {this.state.hue}, {this.state.saturation}, {this.state.lightness}
        </div>

        <section>
          <div
            className="colorBox"
            style={{
              backgroundColor: `hsl(${this.state.hue} ${this.state.saturation}% ${this.state.lightness}%) `,
            }}
          ></div>
        </section>

        <footer>
          <p>made by mary 2021</p>
        </footer>
      </div>
    )
  }
}
