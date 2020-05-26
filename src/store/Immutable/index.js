import { v4 as uuid } from 'uuid'

// TODO: import immutable, ramda and util function for arrays

const SET_IMMUTABLE_MAP = 'immutable/GET_IMMUTABLE_MAP'
const SET_IMMUTABLE_ORDERD_MAP = 'immutable/GET_IMMUTABLE_ORDERD_MAP'

export const setImmutableMap = () => {
  return {
    type: SET_IMMUTABLE_MAP,
    payload: { id: uuid(), name: 'Alex', hobbies: { metal: true } },
  }
}

export const setImmutableOrderdMap = () => {
  return {
    type: SET_IMMUTABLE_ORDERD_MAP,
    payload: [
      { id: uuid(), name: 'Alex', hobbies: { metal: true, baking: false } },
      { id: uuid(), name: 'Vila', hobbies: { metal: false, baking: true } },
    ],
  }
}

// TODO: create immutable inital state

// export default function reducer(state = initialState, { payload, type }) {
//   switch (type) {
// TODO: return state with set or setIn
//     default:
//       return state
//   }
// }
