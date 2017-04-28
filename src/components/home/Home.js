import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <div>Pagina de inicio</div>
        <Link to='/page'>
          PAGE
        </Link>
      </div>
    )
  }
}

export default Home
