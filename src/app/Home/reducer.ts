import { Reducer } from 'redux'
import { HomeState, HomeActionTypes } from './types'
import { HomeActions } from './actions'

const initialState: HomeState = {
  name: "Myles",
}

export const homeReducer: Reducer<HomeState, HomeActions> = (state = initialState, action: HomeActions) => {
  switch (action.type) {
    case HomeActionTypes.SET_NAME: {
      return { ...state, name: action.payload.name }
    }
    default: {
      return state
    }
  }
}
