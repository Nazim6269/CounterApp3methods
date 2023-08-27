//This Store is For basic and React Redux
// import { createStore } from "redux";
// import { counterReducer } from "./reducers/counterReducer";

// const store = createStore(counterReducer);
// export default store;

//This Store is For redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
