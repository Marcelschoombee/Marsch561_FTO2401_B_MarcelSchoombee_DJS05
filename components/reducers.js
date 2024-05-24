import { ADD, SUBTRACT, RESET } from './actions.js';


const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default reducer;