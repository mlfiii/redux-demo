import { v4 as uuid } from 'uuid'

const GET_USERS = 'user/GET_USER'
const ADD_USER = 'user/ADD_USER'

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: [{ id: uuid(), name: 'Alex' }],
  }
}

export const addUser = username => ({
  type: ADD_USER,
  payload: { id: uuid(), name: username },
})

const initialState = {
  users: [],
}

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload }
    case ADD_USER:
      return { users: [...state.users, payload] }
    default:
      return state
  }
}
