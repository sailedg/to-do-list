function CreateTodoButton({ setOpenModal }) {
    return (
        <button
            className="createBtn"
            onClick={() => {
                setOpenModal(state => !state);
            }}
        >+</button>
    );
}

export { CreateTodoButton }