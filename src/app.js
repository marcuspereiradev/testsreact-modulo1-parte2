'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>

        {<Timer timer={this.state.time} />}
        
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props</button>

      </div>
    )
  }
}

export default App
