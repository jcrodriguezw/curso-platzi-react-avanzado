import React from 'react'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

import { Nav, Link } from './styles'

const size = '32px'

export function NavBar () {
  return (
    <Nav>
      <Link to='/'><MdHome size={size} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={size} /></Link>
      <Link to='/user'><MdPersonOutline size={size} /></Link>
    </Nav>
  )
}
