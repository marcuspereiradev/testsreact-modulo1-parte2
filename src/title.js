'use strict'
import React from 'react'

const Title = React.createClass({
  getDefaultProps() {
    return {
      name: 'Desconhecido',
      lastName: 'Desconhecido'
    }
  },

  render() {
    return (
      <h1>Olá {`${this.props.name} ${this.props.lastName}`}</h1>
    )
  }
})

export default Title
