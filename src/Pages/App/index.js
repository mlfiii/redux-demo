import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Thunk from '../Thunk'
import Immutable from '../Immutable'
import Nav from '../../Components/Nav'

import { Wrapper } from './styles'

const App = () => (
  <Router>
    <Nav />
    <Wrapper className='container'>
      <Route exact path='/' component={Home} />
      <Route path='/thunk' component={Thunk} />
      <Route path='/immutable' component={Immutable} />
    </Wrapper>
  </Router>
)

export default App
