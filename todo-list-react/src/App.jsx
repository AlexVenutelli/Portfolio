import { useState } from "react";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
import CurrentDay from "./components/currentDay";
import DeleteButton from "./components/deleteButton/DeleteButton";
import "./App.css";

function App() {
  const [listData, setListData] = useState([]);

  return (
    <div className="App">
      <div className="today">
        <h1>Today</h1>
        <CurrentDay />
      </div>
      <AddTodoInput setListData={setListData} />
      <TodoList list={listData} setListData={setListData} />
      <div className="deleteAllButton">
        <DeleteButton listData={listData} setListData={setListData} />
      </div>
    </div>
  );
}

export default App;
