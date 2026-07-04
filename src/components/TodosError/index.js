import './TodosError.css';

function TodosError() {
    return (
        <div className="TodosError-container">
            <div className="TodosError-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px">
                    <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                </svg>
            </div>
            <h3 className="TodosError-title">¡Algo salió mal!</h3>
            <p className="TodosError-message">
                No pudimos cargar tus tareas.<br/>Intenta recargar la página.
            </p>
            <button
                className="TodosError-retryBtn"
                onClick={() => window.location.reload()}
            >
                Reintentar
            </button>
        </div>
    );
}

export { TodosError };