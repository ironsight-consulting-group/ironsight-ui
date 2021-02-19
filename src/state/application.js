import types from "./types"

export const state = {
  layer: undefined,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_LAYER:
      return {
        ...state,
        layer: action.data,
      }
    case types.CLEAR_LAYER:
      return {
        ...state,
        layer: undefined,
      }
    default:
      return state
  }
}
