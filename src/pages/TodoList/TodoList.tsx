import Button from "../../components/atoms/Button/Button"
import Input from "../../components/atoms/Input/Input"
import Header from "../../components/molecules/Header/Header"
import { FaSearch } from 'react-icons/fa';
import './TodoList.css'
import Accordian from "../../components/atoms/Accordian/Accordian";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../components/organisms/Task/Task";
import { TodoListType } from "../../types/TodoList/TodoListTypes";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { deleteList } from "../../store/TodoList/TodoListDataSlice";
import { useEffect, useMemo, useState } from "react";
import { IconBaseProps } from "react-icons";

const SearchIcon = FaSearch as React.ComponentType<IconBaseProps>;
const TodoList: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const todoListItems = useSelector((state: RootState) => state.data.list);
    const dispatch = useDispatch();
    const filteredItems = todoListItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase());
        return matchesSearch;
    });
    const listInprogress = filteredItems.filter((r: TodoListType) => r.status === 'inProgress');
    const listCompleted = filteredItems.filter((r: TodoListType) => r.status === 'completed');
    const listPending = filteredItems.filter((r: TodoListType) => r.status === 'pending');
    const navigate = useNavigate();
    const onAddClick = () => {
        navigate('/add');
    }
    const onEditTaskClick = (rec: TodoListType) => {
        navigate(`/edit?id=${rec.id}`)
    }
    const onDeleteTask = (rec: TodoListType) => {
        dispatch(deleteList(rec))
    }
    return (
        <div className="todo-main">
            <Header title='TODO APP' />
            <div className="todo-body">
                <div className="acc-div">
                    <Input placeholder='Search To-do' icon={<SearchIcon className="search-icon" />} type='text' onChange={(e) => setSearchValue(e.target.value)} />
                    <Accordian title={`In Progress (${listInprogress.length})`} content={
                        <>
                            {listInprogress.map((rec: TodoListType) => (
                                <Task taskData={rec} key={rec.id} onEditClick={onEditTaskClick} onDeleteClick={onDeleteTask} />
                            ))}
                        </>
                    } expanded={true} />
                    <Accordian title={`Pending (${listPending.length})`} content={
                        <>
                            {listPending.map((rec: TodoListType) => (
                                <Task taskData={rec} key={rec.id} onEditClick={onEditTaskClick} onDeleteClick={onDeleteTask} />
                            ))}
                        </>
                    } expanded={false} />
                    <Accordian title={`Completed (${listCompleted.length})`} content={
                        <>
                            {listCompleted.map((rec: TodoListType) => (
                                <Task taskData={rec} key={rec.id} onEditClick={onEditTaskClick} onDeleteClick={onDeleteTask} />
                            ))}
                        </>
                    } expanded={false} />

                </div>
                <Button className='footer-btn-class' onClick={onAddClick}>+</Button>
            </div>

        </div>
    )
}
export default TodoList;