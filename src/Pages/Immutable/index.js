import React from 'react'
import { connect } from 'react-redux'
import { OrderedMap } from 'immutable'
import { setImmutableMap, setImmutableOrderdMap } from '../../store/Immutable'

import Button from '../../Components/Button'
import Card from '../../Components/Card'
import { ImgContainer, UserContainer } from './styles'

const mapStateToProps = ({ Immutable }) => ({
  immutable: Immutable,
  // name: Immutable.getIn(['entity', 'name'], ''),
  alexLikesMetal: Immutable.getIn(['entity', 'hobbies', 'metal'], false),
  users: Immutable.getIn(['entities'], OrderedMap()).toList(),
})

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
      {!!users.size &&
        users.map(user => (
          <Card title={user.get('name')} key={user.get('id')}>
            <p>{`Likes baking: ${user.getIn(['hobbies', 'baking'])}`}</p>
            <p>{`Likes metal: ${user.getIn(['hobbies', 'metal'])}`}</p>
          </Card>
        ))}
    </UserContainer>
  </React.Fragment>
)

export default connect(mapStateToProps)(Immutable)
