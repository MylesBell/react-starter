import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history';

// Import your state types and reducers here.
import { HomeState } from './Home/types';
import { homeReducer } from './Home/reducer';

// The top-level state object
export interface ApplicationState {
  router: RouterState
  home: HomeState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer: (history: History) => Reducer<ApplicationState> = (history) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  home: homeReducer
});