import { Todo } from '../models/todo';
import * as fromTodo from '../actions/todo';

export interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: []
};

export const reducer = (state: State = initialState, action: fromTodo.Action): State => {
  // console.log(state, action);
  switch (action.type) {
    case fromTodo.TODO_LOAD:
      return Object.assign({}, state, { todos: [] });
    case fromTodo.TODO_LOAD_SUCCESS:
    case fromTodo.TODO_SEARCH_SUCCESS:
      return Object.assign({}, state, { todos: action.payload });
    case fromTodo.TODO_DELETE_SUCCESS:
      const todos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
      return Object.assign({}, state, { todos });
    default:
      return state;
  }
};

export const getTodos = (state: State) => state.todos;
