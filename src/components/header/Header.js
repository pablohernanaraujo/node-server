import React from 'react'
import { Title } from '../styled/header'

class Header extends React.Component {
  render () {
    const { props } = this

    return (
      <Title {...props}>{props.title}</Title>
    )
  }
}

export default Header
