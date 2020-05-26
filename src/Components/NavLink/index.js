import React from 'react'
import { Link } from 'react-router-dom'
import withSecretNumber from '../withSecretNumber'

import { Li } from './styles'

const NavLink = ({ children, link, pathname, secretNumber }) => (
  <Li link={link} pathname={pathname}>
    <Link to={link}>{children}</Link>
  </Li>
)

export default withSecretNumber(NavLink)
