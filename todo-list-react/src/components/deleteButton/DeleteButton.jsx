import React from "react";
import { useState } from "react";
import "./index.css";

const DeleteButton = ({ setListData }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteAllClick = () => {
    setListData([]);
    setConfirmDelete(false);
  };

  return (
    <div className="DeleteButton">
      {confirmDelete ? (
        <>
          <p>Are you sure you want to delete all items?</p>

          <div className="DeleteButtonChoice ">
            <button onClick={handleDeleteAllClick}>Yes</button>
            <button onClick={() => setConfirmDelete(false)}>No</button>
          </div>
        </>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>Delete All</button>
      )}
    </div>
  );
};

export default DeleteButton;
