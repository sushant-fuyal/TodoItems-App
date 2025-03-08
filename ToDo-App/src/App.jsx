import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./Components/InputField.jsx";
import TodoList from "./Components/Todolist.jsx";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./Store/Todo-Items-Store.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      <center>
        <h1 className="my-4">ToDo App</h1>

        <InputField></InputField>

        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

        <TodoList></TodoList>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
