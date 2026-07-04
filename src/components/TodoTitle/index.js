import './TodoTitle.css';
import { TodoContext } from '../../context/TodoContext';
import { useContext } from 'react';

function TodoTitle() {
    const {
        totalTodos,
        comepletedTodos
    } = useContext(TodoContext);

    return (
        <h1>
            Haz completado <span className="counterCompleted">{comepletedTodos}</span> de <span className="counterTotal">{totalTodos}</span> To-Do's
        </h1>
    );
}

export { TodoTitle }
