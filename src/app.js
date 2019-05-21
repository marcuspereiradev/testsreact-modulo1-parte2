'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Marcus'
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          {console.log(this.state.text)}
        </div>
      </div>
    )
  }
}

export default App
