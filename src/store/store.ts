import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from './TodoList/TodoListDataSlice'

export const store = configureStore({
    reducer: {
        data: TodoListReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;