import { ChangeEvent, FormEvent, SetStateAction, useMemo, useState } from "react"
import Button from "../../../components/atoms/Button/Button"
import Input from "../../../components/atoms/Input/Input"
import TextArea from "../../../components/atoms/TextArea/TextArea"
import Header from "../../../components/molecules/Header/Header"
import './AddTask.css'
import { TodoListType } from "../../../types/TodoList/TodoListTypes"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/store"
import { addList, updateList } from "../../../store/TodoList/TodoListDataSlice"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import Select from "../../../components/atoms/Select/Select"
import { TiArrowLeft } from "react-icons/ti";

const AddTask: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('')
    const location = useLocation();
    const statusOptions = [{
        name: 'In Progress',
        value: 'inProgress'
    }, {
        name: 'Completed',
        value: 'completed'
    }, {
        name: 'Pending',
        value: 'pending'
    }]
    const todoListItems = useSelector((state: RootState) => state.data.list)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const isEdit: boolean = location.pathname.includes('edit');
    useMemo(() => {
        const rec = todoListItems?.find(r => r.id === Number(params.get('id')));
        setTitle(rec?.title ?? '')
        setDescription(rec?.description ?? '')
        setStatus(rec?.status ?? '')
    }, [params.get('id')])
    const onTaskAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: TodoListType = {
            id: isEdit ? Number(params.get('id')) : Date.now(),
            title,
            description,
            status: isEdit ? status : 'pending'
        }
        if (isEdit) {
            dispatch(updateList(newTask))
        } else {
            dispatch(addList(newTask));
        }
        setTitle('');
        setDescription('');
        navigate('/')
    }
    const onCancelClick = () => {
        navigate('/')
    }
    return (
        <div className="form-div">
            <Header title={isEdit ? "Edit Task" : "Add Task"} prevIcons={<span onClick={onCancelClick}><TiArrowLeft size={60} /></span>} />
            <form className="form-container" onSubmit={onTaskAdd}>
                <Input value={title} placeholder="Enter the Title" type={"text"} onChange={(e) => setTitle(e.target.value)} required />
                <TextArea value={description} placeholder="Enter the description" onChange={(e) => setDescription(e.target.value)} required />
                {isEdit && <Select value={status} required onChange={(e) => setStatus(e.target.value)} options={statusOptions} />}
                <div className="footer-btns">
                    <Button className="cancel-btn" onClick={onCancelClick}>Cancel</Button>
                    <Button type="submit" className="submit-btn">{isEdit ? 'Update' : 'ADD'}</Button>
                </div>
            </form>
        </div>

    )
}
export default AddTask;