const redux = require("redux");

// function counterReducer(){}

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

//memo1
//The counterReducer function takes two arguments: state and action.
//The state argument is an object that represents the current state of the counter,
//and the action argument is an object that describes how the state should be updated. In this case,
//the counterReducer function simply increments the value of the counter property in the state object
//by 1 and returns the updated state object.

//The createStore function from the Redux library is used to create a store object.
//The counterReducer function is passed as an argument to the createStore function,
//which sets it as the reducer function for the store.

//The store.subscribe method is used to register a callback function called counterSubscriber with the store.
//This function will be called every time the store's state changes.

//The store.dispatch method is used to dispatch an action to the store.
//In this case, the action is an object with a type property set to "increment".
//When an action is dispatched to the store, the store's reducer function is called
//with the current state and the action object as arguments. The reducer function returns a new state object
//based on the action, and the store updates its internal state to the new state.

//After the store's internal state is updated, the counterSubscriber function is called with the updated state.
//In this case, the counterSubscriber function simply logs the current state to the console.
