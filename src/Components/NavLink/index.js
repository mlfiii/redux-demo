import React from 'react'
import { Link } from 'react-router-dom'
// TODO: import HOC withSecretNumber

import { Li } from './styles'

const NavLink = ({ children, link, pathname }) => (
  <Li link={link} pathname={pathname}>
    <Link to={link}>{children}</Link>
  </Li>
)

export default NavLink
