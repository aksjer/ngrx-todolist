import { createSelector } from 'reselect';
import * as fromLayout from './layout';
import * as fromTodo from './todo';

export interface State {
  layout: fromLayout.State;
  todo: fromTodo.State;
}

export const reducers = {
  layout: fromLayout.reducer,
  todo: fromTodo.reducer
};

export const getLayoutState = (state: State) => state.layout;
export const getMenuState = createSelector(getLayoutState, fromLayout.getMenuState);
export const getLoadingBarState = createSelector(getLayoutState, fromLayout.getLoadingBarState);
export const getAddBtnIcon = createSelector(getLayoutState, fromLayout.getAddBtnIcon);

export const getTodoState = (state: State) => state.todo;
export const getTodos = createSelector(getTodoState, fromTodo.getTodos);
