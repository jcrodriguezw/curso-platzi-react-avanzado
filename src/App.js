/* eslint-disable react/jsx-indent */
import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegister } from './pages/NotRegister'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

function App () {
  return (
    <div>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) => isAuth
            ? <Router>
               <Favs path='/favs' />
              <User path='/user' />
              </Router>
            : <Router>
              <NotRegister path='favs' />
              <NotRegister path='user' />
              </Router>
        }
      </UserLogged>

      <NavBar />
    </div>
  )
}

export default App
