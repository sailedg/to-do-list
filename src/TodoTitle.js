import './TodoTitle.css';

function TodoTitle({ total, completed }) {
    return (
        <h1>
            Haz completado <span className="counterCompleted">{completed}</span> de <span className="counterTotal">{total}</span> To-Do's
        </h1>
    );
}

export { TodoTitle }
