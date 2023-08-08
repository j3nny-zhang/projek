import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/tasks/' + task.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="task-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { task && (
                <article>
                    <h2>{ task.title }</h2>
                    <div>{ task.body }</div>
                    <p>Do by { task.deadline }</p>
                    <br></br>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default TaskDetails;