// Define action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

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

// Define createStore function
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
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
console.log("Scenario 1: Initial State Verification");
console.log("Initial state:", store.getState().count);

// Incrementing the Counter
console.log("\nScenario 2: Incrementing the Counter");
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log("Count after incrementing twice:", store.getState().count);

// Decrementing the Counter
console.log("\nScenario 3: Decrementing the Counter");
store.dispatch({ type: SUBTRACT });
console.log("Count after decrementing once:", store.getState().count);

// Resetting the Counter
console.log("\nScenario 4: Resetting the Counter");
store.dispatch({ type: RESET });
console.log("Count after resetting:", store.getState().count);