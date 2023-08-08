import TaskBoard from './TaskBoard';
import useFetch from './useFetch';

const Homepage = () => {
    const { data: tasks, isPending, error } = useFetch('http://localhost:8000/tasks');

    return (
        <div className="home">
            <h1>Projek</h1>
            {tasks && <TaskBoard tasks={tasks}/>}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
        </div>
    );
}

export default Homepage;