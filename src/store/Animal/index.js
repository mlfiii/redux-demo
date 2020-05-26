// TODO: import data fetching library
import axios from 'axios'

// TODO: define 3 RSAA types (cases)
const GET_DOG_REQUEST = 'animals/GET_DOG_REQUEST'
const GET_DOG_SUCCESS = 'animals/GET_DOG_SUCCESS'
const GET_DOG_ERROR = 'animals/GET_DOG_ERROR'

// TODO: define thunk
export const getDogImage = () => dispatch => {}

// TODO: define success action creator
const getDogImageSuccess = ({ data }) => ({})

const initialState = {
  busy: false,
  error: '',
  dogBreed: {},
  dogImage: '',
}

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case GET_DOG_REQUEST:
      return { ...state, ...payload }
    case GET_DOG_SUCCESS:
      return { ...state, ...payload }
    case GET_DOG_ERROR:
      return { ...state, ...payload }
    default:
      return state
  }
}
