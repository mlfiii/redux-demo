import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../NavLink'

import { navlinks } from './utils'

const Nav = ({ location: { pathname } = {} }) => (
  <nav>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo left'>
        Demo
      </Link>
      <ul className='right'>
        <li>hello</li>
      </ul>
    </div>
  </nav>
)

// TODO: use withRouter HOC to have access to router without declaring it
export default Nav
