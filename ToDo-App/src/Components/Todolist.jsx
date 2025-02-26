import TodoLists from "./TodoLists";

function TodoList({ todoItems, onDeleteClick }) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoLists
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}></TodoLists>
      ))}
    </div>
  );
}
export default TodoList;
