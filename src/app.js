'use strict'

import React, { Component } from 'react'
import Title from './title';
import Square from './square'

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Marcus" lastName="Pereira" />

        <div className="container" onClick={() => {alert('Clicou')}}>
          <Square />
        </div>
      </div>
    )
  }
}

export default App
