import { TodoTitle } from "../components/TodoTitle";
import React from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoFilter } from '../components/TodoFilter';
import { Confetti } from '../components/Confetti';
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { TodosNotFound } from "../components/TodosNotFound";
import { TodoContext } from "../context/TodoContext";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        comepletedTodos,
        searchValue,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    const [cardOpen, setCardOpen] = React.useState(false);
    return (
        <>
            {totalTodos > 0 && comepletedTodos === totalTodos && <Confetti />}
            {/* <TodoTitle total={totalTodos} completed={comepletedTodos} /> */}
            <TodoTitle />
            <main className={`book${cardOpen ? ' book--open' : ''}`}>
                <div className="presentation">
                    <h2>Mis tareas diarias</h2>
                    <p>Organiza y completa tus pendientes de hoy.</p>
                </div>
                <button
                    className="cardHook"
                    onClick={() => setCardOpen((open) => !open)}
                    aria-label={cardOpen ? 'Cerrar portada' : 'Abrir portada'}
                >
                    <span className="cardHook-arrow"></span>
                </button>
                <div className="content">
                    <TodoInput />
                    <TodoFilter />
                    <TodoList>
                        {loading && (
                            <>
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                            </>
                        )}
                        {error && <TodosError />}
                        {(!loading && totalTodos === 0) && <TodosEmpty />}
                        {(!loading && totalTodos > 0 && searchedTodos.length === 0) && <TodosNotFound searchValue={searchValue} />}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)} />
                        ))}
                    </TodoList>
                </div>
            </main>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </>
    );
}

export { AppUI }