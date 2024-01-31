import { useState } from "react";
import "./index.css";

const TodoItem = ({ todoData, setListData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoData.todo);

  const onHandleClick = () => {
    setListData((prev) => prev.filter((item) => item.id !== todoData.id));
  };

  const onEditClick = () => {
    setIsEditing(true);
  };

  const onSaveClick = () => {
    setListData((prev) =>
      prev.map((item) =>
        item.id === todoData.id ? { ...item, todo: editedText } : item
      )
    );
    setIsEditing(false);
  };

  const onCancelClick = () => {
    setIsEditing(false);
    setEditedText(todoData.todo);
  };

  const onInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className="TodoItem" id={todoData.id}>
      <div className="TodoItem__item">
        {isEditing ? (
          <>
            <input
              className="Input_edit"
              type="text"
              value={editedText}
              onChange={onInputChange}
            />

            <div>
              <button onClick={onSaveClick}>Save</button>
              <button onClick={onCancelClick}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p>{todoData.todo}</p>

            <div>
              <button className="DeleteButton_toDo" onClick={onHandleClick}>
                🗑️
              </button>
              <button className="EditButton_toDo" onClick={onEditClick}>
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
