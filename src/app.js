'use strict'

import React, { Component } from 'react'
import Title from './title';
import Square from './square'
import Button from './button'
import LikeButton from './likeButton';
import SearchButton from './SearchButton'

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Marcus" lastName="Pereira" />

        <div className="container">
          <Square />
          <Button>Botão</Button>
          <LikeButton />
          <SearchButton />
        </div>
      </div>
    )
  }
}

export default App
