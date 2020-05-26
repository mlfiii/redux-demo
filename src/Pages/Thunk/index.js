import React from 'react'
import { connect } from 'react-redux'
import Button from '../../Components/Button'
import { getDogImage } from '../../store/Animal'

import { DogImage } from './styles'

const mapStateToProps = ({ Animal }) => ({
  busy: Animal.busy,
  dogImage: Animal.dogImage,
})

const Thunk = ({ busy, dispatch, dogImage }) => (
  <div>
    <h3>Doggie Images</h3>
    <p>
      Let's use see redux thunk in action. Remember, redux actions are required
      to return plain javascript objects, however when using redux-thunk, we're
      able to return funcions. Which means we can encapsulate with closures and
      wait for something to finish before dispatching our success type and
      payload.
    </p>
    <Button handler={() => dispatch(getDogImage())}>Get Image</Button>
    {busy && <p>Loading... </p>}
    {dogImage && !busy && (
      <DogImage>
        <img src={dogImage} alt='doggies' />
      </DogImage>
    )}
  </div>
)

export default connect(mapStateToProps)(Thunk)
