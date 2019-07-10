import React, { Component } from 'react'

class Plugin extends Component {
  state = {
    myInput: ''
  }

  handleClick = () => {
    this.state.myInput.focus()
  }

  getNode = (node) => {
    const myInput = node
    this.setState({ myInput })
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.getNode} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin
