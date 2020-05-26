import * as R from 'ramda'
import { v4 as uuid } from 'uuid'
import { fromJS, Map, OrderedMap } from 'immutable'
import { objFromListWith } from '../utils'

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

const initialState = fromJS({
  entity: Map(),
  entities: OrderedMap(),
})

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_IMMUTABLE_MAP:
      return state.set('entity', fromJS(payload))
    case SET_IMMUTABLE_ORDERD_MAP:
      return state.set(
        'entities',
        fromJS(objFromListWith(R.prop('id'), payload))
      )
    default:
      return state
  }
}
