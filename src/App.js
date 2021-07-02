/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'
import { Redirect, Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'

function App () {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Logo />

      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}

export default App
