import React from "react";
import Todo from "../models/todo";
import styled from "./TodoItem.module.css";

const TodoItem: React.FC<Todo> = (props) => {
  return (
    <li key={props.id} className={styled.item}>
      {props.text}
    </li>
  );
};
export default TodoItem;
