'use strict'

import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: 'textarea value2'
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(e)
      }}
      onChange={(e) => {
        console.log(`name ${e.target.name}`)
        console.log(`value ${e.target.value}`)
      }}
      >
        <input type='name' name='name' />
        <input type='email' name='email' />
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default App
