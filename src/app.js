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
        <textarea value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}></textarea>
      </form>
    )
  }
}

export default App
