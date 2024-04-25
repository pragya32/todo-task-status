import { createSlice } from "@reduxjs/toolkit";

const taskInitialState = {
  groups: [],
};

export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState: taskInitialState,
  reducers: {
    addTask: (_, { payload }) => ({
      state: true,
      type: payload.type,
      message: payload.message,
    }),
  },

  extraReducers: {},
});

export const { addTask } = TaskSlice.actions;

export default TaskSlice.reducer;
