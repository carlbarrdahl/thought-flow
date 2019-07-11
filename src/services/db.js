export const get = () => {
  try {
    const json =
      global.localStorage && global.localStorage.getItem("thought-flow")
    return JSON.parse(json)
  } catch (error) {
    return null
  }
}

export const save = state => {
  try {
    const json = JSON.stringify(state)
    global.localStorage && global.localStorage.setItem("thought-flow", json)
    return state
  } catch (error) {
    return {}
  }
}
