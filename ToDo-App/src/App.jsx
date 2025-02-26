import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./Components/InputField.jsx";
import TodoList from "./Components/Todolist.jsx";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <h1 className="my-4">ToDo App</h1>

      <InputField onNewItem={handleNewItem}></InputField>

      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoList
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}></TodoList>
    </center>
  );
}

export default App;
