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
      <form>
        <textarea defaultValue={this.state.value}></textarea>
      </form>
    )
  }
}

export default App
