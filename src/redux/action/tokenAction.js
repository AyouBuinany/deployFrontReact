import { login } from '../../modules/serverCall'

export const postToken = (email, password,nameRoute) => dispatch => {
  dispatch({
    type: POST_TOKEN_BEGIN
  })
  return login(email, password,nameRoute)
    .then(res => {
      dispatch({
        type: POST_TOKEN_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: POST_TOKEN_FAIL,
        payload: { error }
      })
      throw error
    })
}

export const insertToken = () => dispatch => {
  let token
  if (localStorage.getItem('auth')) {
    token = JSON.parse(localStorage.getItem('auth'))
    dispatch({
      type: INSERT_TOKEN_SUCCESS,
      payload: token
    })
  } else {
    dispatch({
      type: INSERT_TOKEN_FAIL
    })
  }
}

export const POST_TOKEN_BEGIN = 'POST_TOKEN_BEGIN'
export const POST_TOKEN_SUCCESS = 'POST_TOKEN_SUCCESS'
export const POST_TOKEN_FAIL = 'POST_TOKEN_FAIL'
export const INSERT_TOKEN_SUCCESS = 'INSERT_TOKEN_SUCCESS'
export const INSERT_TOKEN_FAIL = 'INSERT_TOKEN_FAIL'


