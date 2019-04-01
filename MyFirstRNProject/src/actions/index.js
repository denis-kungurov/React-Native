import { SEARCH_CHANGE, MOVIES_FETCHED, MOVIES_FAILED } from '../types'

export const searchChanged = (text) => {    
  return {
    type: SEARCH_CHANGE,
    payload: text
  }
}

export const getMovies = (loginObject) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: MOVIES_FETCHED, payload: success})
    return success
  }
  function onError(error) {
    dispatch({type: MOVIES_FAILED, error})
  }
  try {
    const URL = 'https://auth.135.by/api/driver/token'
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: loginObject.phone,
        password: loginObject.password
      })
    })
    console.log(res)
    const success = await res.json()
    console.log(success)
    
    return onSuccess(success)
  } catch (error) {
    return onError(error)
  }
}
