import { useState } from "react";
interface Task {
  description: string;
  priority: string;
  isDone: boolean;
  id: number;
}
function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (Task: Task) => setTasks([...tasks, Task]);
  return <div></div>;
}

export default TaskManager;
