import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escrite tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Aprender React' />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }