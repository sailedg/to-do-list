import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const comepletedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    })

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveToDos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        const completedActual = newTodos[todoIndex].completed;
        newTodos[todoIndex].completed = !completedActual;
        saveToDos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveToDos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                comepletedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };