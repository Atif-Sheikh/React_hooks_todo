import React, { useState } from "react";
import {
  InputField,
  Button,
  TodoItem,
  TextArea
} from "./style";

function TodoListComp({ todo, deleteTodo, update, ind }) {
  const [isEdit, toggleEdit] = useState(false);
  const [editableTodo, updateEditableTodo] = useState("");

  function updateTodo(ind) {
    update(editableTodo, ind);
    toggleEdit(false);
  }

  function handleChange(value) {
    updateEditableTodo(value);
    toggleEdit(true);
  }

  return (
    <TodoItem>
      {isEdit ? (
        [
          `${ind + 1}.`,
          <InputField
            type="text"
            value={editableTodo}
            onChange={e => updateEditableTodo(e.target.value)}
            onKeyUp={e => (e.keyCode === 13 ? updateTodo(ind) : null)}
          />
        ]
      ) : (
        <TextArea>
          {ind + 1}. {todo}
        </TextArea>
      )}
      <Button
        onClick={() => {
          isEdit ? updateTodo(ind) : handleChange(todo);
        }}
      >
        {" "}
        {isEdit ? "Update" : "Edit"}
      </Button>
      <Button
        onClick={() => {
          isEdit ? toggleEdit(false) : deleteTodo(ind);
        }}
      >
        {isEdit ? "Cancel" : "Delete"}
      </Button>
    </TodoItem>
  );
};

export default TodoListComp;
