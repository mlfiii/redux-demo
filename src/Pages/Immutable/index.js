import React from 'react'
import { connect } from 'react-redux'
import { OrderedMap } from 'immutable'
import { setImmutableMap, setImmutableOrderdMap } from '../../store/Immutable'

import Button from '../../Components/Button'
import Card from '../../Components/Card'
import { ImgContainer, UserContainer } from './styles'

// TODO: map state to props with immutable
const mapStateToProps = ({ Immutable }) => ({})

const Immutable = ({ alexLikesMetal, dispatch, users }) => (
  <React.Fragment>
    <h3>Immutable JS</h3>
    <Button handler={() => dispatch(setImmutableMap())}>Set entity</Button>
    <Button handler={() => dispatch(setImmutableOrderdMap())}>
      Set entities
    </Button>
    {alexLikesMetal && (
      <ImgContainer>
        <img
          src='https://blog.drooble.com/wp-content/uploads/2017/01/Horns-Simpsons-Drooble.png'
          alt='horns'
        />
      </ImgContainer>
    )}
    <UserContainer>
      {/* 
      map through users with immutable
    */}
    </UserContainer>
  </React.Fragment>
)

export default connect(mapStateToProps)(Immutable)
