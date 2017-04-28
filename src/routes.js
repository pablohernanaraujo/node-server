import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/home/Home'
import Page from './components/page/Page'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default (
  <div>
    <Header title='Titulo' />
    <Route path='/' exact component={Home} />
    <Route path='/page' component={Page} />
    <Footer />
  </div>
)
