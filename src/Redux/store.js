import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from "./root-reducer";

const rootReducer = combineReducers({
  todos: todo,
});

export const store = createStore(rootReducer, composeWithDevTools());
