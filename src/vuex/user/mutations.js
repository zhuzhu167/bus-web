export const LOGIN = (state, data) => {
  state.is_login = data
}

export const SET_USERNAME = (state, data) => {
  state.userName = data
}

export const SET_ISREMIND = (state, data) => {
  state.is_remind = data
}

export const SET_CLOCK = (state, data) => {
  state.clockList.push(data)
}
