import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLink from '../NavLink'

import { navlinks } from './utils'

const Nav = ({ location: { pathname } = {} }) => (
  <nav>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo left'>
        Demo
      </Link>
      <ul className='right'>
        {navlinks.map(({ link, text }, idx) => (
          <NavLink key={idx} link={link} pathname={pathname}>
            {text}
          </NavLink>
        ))}
      </ul>
    </div>
  </nav>
)

export default withRouter(Nav)
