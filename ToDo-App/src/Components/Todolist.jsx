import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-Items-Store";
import TodoLists from "./TodoLists";

function TodoList() {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.map((item) => (
        <TodoLists
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}></TodoLists>
      ))}
    </div>
  );
}
export default TodoList;
