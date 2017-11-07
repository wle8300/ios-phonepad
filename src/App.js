import Button from './button'

import React, {Component} from 'react';


class App extends Component {
  constructor () {
    super()
    this._bgColor = "#f5f5f5"
    this._accentColor = "#444444"
    this._audioContext = new AudioContext()
  }
  render () {
    return (
      <div style={this.$3064154821488()}>
        <div style={this.$2896590892662()}>
          <Button
            tone="1"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>1</div>
            <div style={this.$2361762005236()}></div>
          </Button>
          <Button
            tone="2"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>2</div>
            <div style={this.$2361762005236()}>ABC</div>
          </Button>
          <Button
            tone="3"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>3</div>
            <div style={this.$2361762005236()}>DEF</div>
          </Button>
          <Button
            tone="4"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>4</div>
            <div style={this.$2361762005236()}>GHI</div>
          </Button>
          <Button
            tone="5"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>5</div>
            <div style={this.$2361762005236()}>JKL</div>
          </Button>
          <Button
            tone="6"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>6</div>
            <div style={this.$2361762005236()}>MNO</div>
          </Button>
          <Button
            tone="7"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>7</div>
            <div style={this.$2361762005236()}>PQRS</div>
          </Button>
          <Button
            tone="8"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>8</div>
            <div style={this.$2361762005236()}>TUV</div>
          </Button>
          <Button
            tone="9"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>9</div>
            <div style={this.$2361762005236()}>WXYZ</div>
          </Button>
          <Button
            tone="*"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3614752369292()}>*</div>
            <div style={this.$2361762005236()}></div>
          </Button>
          <Button
            tone="0"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>0</div>
            <div style={this.$2361762005236()}>+</div>
          </Button>
          <Button
            tone="#"
            bgColor={this._bgColor}
            accentColor={this._accentColor}
            audioContext={this._audioContext}>
          <div style={this.$3255975513423()}>#</div>
          <div style={this.$2361762005236()}></div>
        </Button>
        </div>
      </div>
    )
  }
  $2896590892662 () {
    return {display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '31vw',}
  }
  $3064154821488 () {
    return {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 500ms linear',
      backgroundColor: this._bgColor,
    }
  }
  $3051674128548 () {
    return {
      fontSize: '2.5vw',
    }
  }
  $2361762005236 () {
    return {
      fontSize: '0.85vw',
      letterSpacing: '0.085vw',
    }
  }
  $3614752369292 () {
    return {
      fontSize: '6vw',
      height: '4vw',
    }
  }
  $3255975513423 () {
    return {
      fontSize: '3vw',
    }
  }
}


export default App