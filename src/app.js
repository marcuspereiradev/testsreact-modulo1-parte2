'use strict'

import React, { Component } from 'react'
import Title from './title';
import Square from './square'
import Button from './button'

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Marcus" lastName="Pereira" />

        <div className="container" onClick={() => {alert('Clicou')}}>
          <Square />
          <Button>Botão</Button>
        </div>
      </div>
    )
  }
}

export default App
