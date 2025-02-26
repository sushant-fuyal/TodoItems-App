import { useRef } from "react";

function InputField({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const itemName = todoNameElement.current.value;
    const itemDueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(itemName, itemDueDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo Here"></input>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  );
}
export default InputField;
