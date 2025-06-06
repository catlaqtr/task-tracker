import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import Stats from "./Stats";

interface Task {
  description: string;
  priority: string;
  isDone: boolean;
  id: number;
}
interface TaskFormProps {
  onAddTask: (task: Task) => void;
}
function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const handleAddTask = (Task: Task) => setTasks([...tasks, Task]);

  function handleToggle(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.length > 0 ? (
        <ul className="bg-stone-100 p-4 rounded-lg shadow-md space-y-2 max-w-xl mx-auto mt-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded shadow-sm ${
                task.isDone ? "text-gray-400 bg-gray-200" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => handleToggle(task.id)}
              />
              {task.description}{" "}
              <span
                className={`px-2 py-0.5 rounded-md text-sm ${
                  task.priority === "low"
                    ? "text-green-600 bg-green-200"
                    : task.priority === "mid"
                    ? "text-yellow-500 bg-yellow-200"
                    : "text-red-600 font-bold bg-red-200"
                }`}
              >
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 italic mt-6">
          Your list is empty. Add your first task ✍️
        </p>
      )}
      <Stats tasks={tasks} />
    </div>
  );
}

export default TaskManager;
export type { TaskFormProps };
export type { Task };
