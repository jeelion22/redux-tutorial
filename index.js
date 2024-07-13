const { configureStore } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  value: 0,
};

// reducer

function counterReducer(state = initialState, action) {
  if (action.type === "counter/increament") {
    return { ...state, value: state.value + 1 };
  }

  return state;
}

// action creater

function increament() {
  return {
    type: "counter/increament",
  };
}

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

store.dispatch(increament());

console.log(store.getState());

store.dispatch(increament());

console.log(store.getState());
