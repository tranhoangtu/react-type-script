import React, { useRef } from "react";
import styled from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length < 1) {
      //
      return;
    } else {
      props.onAddTodo(enteredText);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styled.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
