import {Link} from 'react-router-dom'

export function Navigation() {
    return(
        <div>
            <h1>
                <Link to="/tasks">Tasks App</Link>
            </h1>
            
            <Link to="/task-create">Create Task</Link>
        </div>
    )
} 
