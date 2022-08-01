import { GlobalReducer } from './';

declare global {
  export interface GlobalReducerAction {
    ADD_TODO: {
      text: string;
    };
    FILTER_TODO: {
      filter: string;
    };
  }
}

export const todoReducer: GlobalReducer<{ todo: string }> = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todo: action.text };
    case 'FILTER_TODO':
      return {
        todo: state.todo.concat(action.filter),
      };
    default:
      return state;
  }
};
