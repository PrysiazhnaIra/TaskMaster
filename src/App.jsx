import "./App.css";
import "modern-normalize";
import initialTasks from "./data/tasks.json";
import { useState } from "react";
import Background from "./components/Background/Background";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [currentColor, setCurrentColor] = useState("#FF69B4");

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id != taskId);
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <h1>Task Master</h1>
      <p>Vite + React project</p>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
