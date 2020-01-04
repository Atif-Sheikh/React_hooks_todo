import React, { useState } from "react";
import TodoListComp from './listItem';
import {
  Title,
  Wrapper,
  TodoWrapper,
  InputField,
  Button,
  TodoList,
} from "./style";

function TodoComponent() {
  const [state, setState] = useState({
    currentTodo: "",
    todos: []
  });

  function handleUpdateState(value, key) {
    setState({ ...state, [key]: value });
  }

  function addTodo() {
    const { currentTodo, todos } = state;
    if (currentTodo.trim()) {
      let updatedArr = [...todos, currentTodo];
      setState({ todos: updatedArr, currentTodo: "" });
    }
  }

  function update(value, ind) {
    const { todos } = state;
    let filterdTodos = [...todos];
    filterdTodos.splice(ind, 1, value);
    setState({ ...state, todos: filterdTodos });
  }

  function deleteTodo(ind) {
    const { todos } = state;
    let filterdTodos = [...todos];
    filterdTodos.splice(ind, 1);
    setState({ ...state, todos: filterdTodos });
  }

  return (
    <Wrapper>
      <Title>Todo with React Hooks!</Title>

      <TodoWrapper>
        <InputField
          type="text"
          value={state.currentTodo}
          onChange={e => handleUpdateState(e.target.value, "currentTodo")}
          onKeyUp={e => (e.keyCode === 13 ? addTodo() : null)}
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </TodoWrapper>
      <TodoWrapper secondary>
        <TodoList>
          {state.todos.map((todo, ind) => (
            <TodoListComp
              todo={todo}
              deleteTodo={deleteTodo}
              update={update}
              key={ind.toString()}
              ind={ind}
            />
          ))}
        </TodoList>
      </TodoWrapper>
    </Wrapper>
  );
};

export default TodoComponent;
