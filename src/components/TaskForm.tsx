import { useState } from "react";
import type { TaskFormProps } from "./TaskManager";

function TaskForm({ onAddTask }: TaskFormProps) {
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");

  return (
    <div>
      <form
        className="flex flex-col md:flex-row gap-4 items-center p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = {
            description: description,
            priority: priority,
            isDone: false,
            id: Date.now(),
          };
          onAddTask(newTask);
          setDescription("");
          setPriority("low");
        }}
      >
        <select
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>low</option>
          <option>mid</option>
          <option>high</option>
        </select>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
