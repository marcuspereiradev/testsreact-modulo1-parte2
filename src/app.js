'use strict'

import React, { Component } from 'react'
import Title from './title';
import Square from './square'
import Button from './button'
import LikeButton from './likeButton';

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Marcus" lastName="Pereira" />

        <div className="container" onClick={() => {alert('Clicou')}}>
          <Square />
          <Button>Botão</Button>
          <LikeButton />
        </div>
      </div>
    )
  }
}

export default App
