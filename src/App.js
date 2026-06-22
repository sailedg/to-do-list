
import { TodoTitle } from "./TodoTitle";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import { TodoFilter } from './TodoFilter';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Lavar la loza", completed: false },
  { text: "Leer un capitulo de un libro", completed: true },
  { text: "Bañar al perro", completed: false },
  { text: "Estudiar React", completed: false },
];

function App() {
  return (
    <>

      <TodoTitle total={5} completed={1} />
      <main>
        <div className="presentation">
          <h2>Mis tareas diarias</h2>
          <p>Organiza y completa tus pendientes de hoy.</p>
        </div>
        <div className="content">
          <TodoInput />
          <TodoFilter />
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>
        </div>
      </main>

      <CreateTodoButton />
    </>
  );
}


export default App;
