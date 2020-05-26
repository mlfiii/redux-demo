import axios from 'axios'

const GET_DOG_REQUEST = 'animals/GET_DOG_REQUEST'
const GET_DOG_SUCCESS = 'animals/GET_DOG_SUCCESS'
const GET_DOG_ERROR = 'animals/GET_DOG_ERROR'

export const getDogImage = () => dispatch => {
  dispatch({ type: GET_DOG_REQUEST, payload: { busy: true } })
  const request = axios.get('https://api.thedogapi.com/v1/images/search')

  return request.then(
    response => dispatch(getDogImageSuccess(response)),
    err =>
      dispatch({ type: GET_DOG_ERROR, payload: { busy: false, error: err } })
  )
}

const getDogImageSuccess = ({ data }) => ({
  type: GET_DOG_SUCCESS,
  payload: { busy: false, dogBreed: data[0].breeds[0], dogImage: data[0].url },
})

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
