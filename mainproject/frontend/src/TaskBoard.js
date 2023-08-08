import { Link } from "react-router-dom";

const TaskBoard = ({tasks}) => {

    return (
        <div className="taskBoard">
            <div className="taskBoard-title">
                <h3>Personal Board</h3>
            </div>

            <div className="taskBoard-list">
                {tasks.map((task) => (
                    <div className='taskBoard-list-item' key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            <h2>{ task.title }</h2>
                            <p>Deadline: { task.deadline }</p>
                        </Link>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
}

export default TaskBoard;