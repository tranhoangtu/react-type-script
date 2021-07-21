import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styled from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styled.todos}>
      {props.items.map((item) => (
        <TodoItem id={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
