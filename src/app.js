'use strict'

import React, { Component } from 'react'
import Title from './title';
import Square from './square'

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Marcus" lastName="Pereira" />

        <div className="container">
          {['blue', 'red', 'green'].map((square, key) => (
            console.log(`${square} ${key}`),
            <Square color={square} key={key}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App
