import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../../Components/Button'
import { addUser, getUsers } from '../../store/User'

import { Heading } from './styles'

const mapStateToProps = ({ User }) => ({
  users: User.users,
})

const Demo = ({ dispatch, users }) => {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    const { value } = event.target
    setUsername(value)
  }

  const handleAddNewUser = event => {
    event.preventDefault()

    dispatch(addUser(username))
    setUsername('')
  }

  return (
    <div>
      <Heading>
        <h3>Simple redux example</h3>
        <Button handler={() => dispatch(getUsers())}>Get initial users</Button>
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
      {!!users.length && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default connect(mapStateToProps)(Demo)
