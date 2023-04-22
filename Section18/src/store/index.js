// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //combine multiple slices and their reducer
});

export default store;

//memo1
//The createSlice function returns an object that
//contains an initialState property and a set of reducers
//that define how the state should be updated in response to different actions.

//memo2
//The createSlice function generates the reducer functions
//and action creators for a specific slice of the store.
//name: A string that specifies the name of the slice.
//initialState: An object that specifies the initial state of the slice.
//reducers: An object that maps action types to reducer functions.

//The reducers object maps different action types to corresponding reducer functions.
//In this case, there are four reducer functions defined for the increment, decrement, increase, and toggle actions.
//These reducer functions modify the state based on the corresponding action that is dispatched to the store.

//memo3
//The configureStore function takes an object with various configuration options
//and returns a new store instance.

//In this case, the reducer option is used to set the reducer function for the store.
//The counterSlice.reducer function is passed as the value of the reducer option,
//which is the generated reducer function from the createSlice call in the previous code block.

//The store object is created and returned by the configureStore function,
// and it represents the Redux store instance that can be used to interact
//with the store, dispatch actions, and subscribe to store updates.
//This store instance can be imported and used in other parts of the application.

//memo4
//The counterActions object contains the generated action creators for the counterSlice.
//These action creators can be used to dispatch actions to the store that will modify the state of the counterSlice.
