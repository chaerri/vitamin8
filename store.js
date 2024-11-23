import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: taskReducer,
});

export default store;
