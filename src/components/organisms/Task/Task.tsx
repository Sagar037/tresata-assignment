
import { TodoListType } from '../../../types/TodoList/TodoListTypes';
import { FaCircle } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import './Task.css';
interface TaskProps {
    taskData: TodoListType;
    onEditClick: (rec: TodoListType) => void;
    onDeleteClick: (rec: TodoListType) => void;
}
const Task: React.FC<TaskProps> = ({ taskData, onEditClick, onDeleteClick }) => {
    return (
        <div className="task-div">
            <div className="avatar-div">
                {`${taskData.title.split('')[0]}`}
            </div>
            <div className="task-content">
                <div className='main-task'>
                    <h3 className="task-header">{taskData.title}</h3>
                    <div className='status-div'>
                        <FaCircle color={taskData.status === 'pending' ? '#ddf508ff' : taskData.status === 'completed' ? '#16fb049e' : '#aaa'} />
                        <div>{taskData.status}</div>
                    </div>
                </div>
                <div className="task-content">{taskData.description}</div>
                <div className='edit-delete'><MdOutlineEdit size={30} onClick={() => onEditClick(taskData)} /><MdOutlineDeleteOutline size={30} color='red' onClick={() => onDeleteClick(taskData)} /></div>
            </div>
        </div>
    )
}
export default Task;