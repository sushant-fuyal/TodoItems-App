import { useState } from "react";

function InputField({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [itemDueDate, setItemDueDate] = useState("");

  const handleNewName = (event) => {
    setItemName(event.target.value);
  };

  const handleNewDueDate = (event) => {
    setItemDueDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(itemName, itemDueDate);
    setItemDueDate("");
    setItemName("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            onChange={handleNewName}
            value={itemName}></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleNewDueDate}
            value={itemDueDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputField;
