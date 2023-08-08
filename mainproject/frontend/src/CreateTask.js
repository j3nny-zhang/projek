import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('Ryan');
    const [deadline, setDeadline] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, body, deadline }

        setIsPending(true);

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            setIsPending(false);
            navigate('/');
        })
    }

    return (
        <div className="createTask">
            <h2>Create a new task!</h2>
            <form onSubmit={handleSubmit}>
                <label>Task Title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Task Body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Deadline:</label>
                <input
                    type="datetime-local"
                    required
                    value={ deadline }
                    onChange={(e) => setDeadline(e.target.value)}
                />

                {/* <label>User:</label>
                <select
                    value={ user }
                    onChange={(e) => setUser(e.target.value)}
                >
                    <option value="Ryan">Ryan</option>
                    <option value="Jenny">Jenny</option>
                </select> */}
                <br></br>

                { !isPending && <button>Add Task</button>}
                { isPending && <button disabled>Adding Task...</button>}

            </form>
        </div>
    )
}

export default CreateTask;