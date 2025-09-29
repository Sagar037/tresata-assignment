import { TodoListType } from "../../types/TodoList/TodoListTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoData {
    list: TodoListType[];
}
const initialState: TodoData = {
    list: [{
        id: 1,
        title: 'Task 1',
        description: 'This is task 1',
        status: 'pending',
    }, {
        id: 2,
        title: 'Task 2',
        description: 'This is task 2',
        status: 'inProgress',
    }, {
        id: 3,
        title: 'Task 3',
        description: 'This is task 3',
        status: 'completed',
    },]
}

const TodoListDataSlice = createSlice({
    name: 'todoListData',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<TodoListType>) => {
            state.list.push(action.payload);
        },
        updateList: (state, action: PayloadAction<TodoListType>) => {
            const item = state.list.find(item => item.id === action.payload.id);
            if (item) {
                Object.assign(item, action.payload);
            }
        },
        deleteList: (state, action: PayloadAction<TodoListType>) => {
            state.list = state.list.filter(item => item.id !== action.payload.id);
        }
    }
})
export const { updateList, addList, deleteList } = TodoListDataSlice.actions;
export default TodoListDataSlice.reducer;