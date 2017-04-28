import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Page extends Component {
  render () {
    return (
      <div className='page'>
        <div>Esta es la primer pagina</div>
        <Link to='/'>
          INICIO
        </Link>
      </div>
    )
  }
}
