export const updateTimestamp = () => ({
  type: 'UPDATE_TIMESTAMP'
})

export const updateConvertTime = time => ({
  type: 'UPDATE_CONVERT_TIME',
  time
})

export const returnedPostData = options => ({
  type: 'RETURNED_POST_DATA',
  options
})
