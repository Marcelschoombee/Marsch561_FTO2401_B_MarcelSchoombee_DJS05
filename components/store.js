// A state statemanagement system inspired bt Redux

// This const represents differant actions that can despatched to the state.
// Define action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// The reducer function manages state changes. It takes two parameters, 
// state and action and returns a new state.
// Define reducer function
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


// The createStore function creates a store to manage the state.
// Define createStore function
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state; // Returns the current state.

    const dispatch = (action) => { // Takes a action, uses the reducer to change the current state.
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => { // Adds a listener to the listeners array.
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Initialize state
    dispatch({});

    return { getState, dispatch, subscribe };
};

// Create store
const store = createStore(reducer);

// Initial State Verification
console.log("Initial state:", store.getState().count);

// Incrementing the Counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log("Count after incrementing twice:", store.getState().count);

// Decrementing the Counter
store.dispatch({ type: SUBTRACT });
console.log("Count after decrementing once:", store.getState().count);

// Resetting the Counter
store.dispatch({ type: RESET });
console.log("Count after resetting:", store.getState().count);