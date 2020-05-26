import React, { useState } from 'react'
// TODO: import connect from react-redux

import Button from '../../Components/Button'
// TODO: import action creators

import { Heading } from './styles'

// TODO: map state to props

const Demo = ({ dispatch, users }) => {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    const { value } = event.target
    setUsername(value)
  }

  const handleAddNewUser = event => {
    event.preventDefault()

    // TODO: dispatch action creator
    setUsername('')
  }

  return (
    <div>
      <Heading>
        <h3>Simple redux example</h3>

        <Button handler={() => {}}>Get initial users</Button>
      </Heading>
      <div>
        <form onSubmit={handleAddNewUser}>
          <input
            type='text'
            onChange={handleChange}
            name='username'
            value={username}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </div>
      {/* 
        loop through users
      */}
    </div>
  )
}

export default Demo
