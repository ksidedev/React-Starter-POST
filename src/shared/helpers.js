/* eslint no-console: ["error", { allow: ["error"] }] */
import memoize from 'fast-memoize'
import fetch from 'unfetch'
import { updateConvertTime, returnedPostData } from './actions'

import { endpoints } from '../constants'
/* eslint-disable no-unused-vars */
let otherEndPointUrl = ''
/* eslint-enable no-unused-vars */

if (process.env.NODE_ENV === 'production') {
  otherEndPointUrl = 'https://reqres.in/api/users'
} else {
  otherEndPointUrl = 'https://reqres.in/api/users'
}

/* ************ */
/* Post Request */
/* ************ */

export function getOtherFakeData(dispatch, payload) {
  return fetch(endpoints.postedDataEndpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      values: {
        name: payload.name,
        movies: payload.movies
      }
    })
  })
    .then(r => r.json())
    .then(data => {
      if (data) {
        dispatch(returnedPostData(data))
        return Promise.resolve()
      }

      return Promise.reject()
    })
    .catch(error => {
      console.error(error)
      return null
    })
}

export function getTheTime(time) {
  return time
}

export const getConvertedTime = memoize(dispatch => {
  const d = new Date()
  const hr = d.getHours()
  const min = d.getMinutes()
  const sec = d.getSeconds()

  const fullTime = `${hr}:${min}:${sec}`
  dispatch(updateConvertTime(fullTime))
  return fullTime
})
