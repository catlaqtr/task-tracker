import type { Task } from "./TaskManager";

interface StatsProps {
  tasks: Task[];
}
function Stats({ tasks }: StatsProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;
  const percentage = Math.round((completedTasks / totalTasks) * 100);
  return (
    <div>
      {totalTasks === 0 ? (
        <p className="text-sm text-center mt-8 text-gray-600">
          You haven’t added any tasks yet ✍️
        </p>
      ) : (
        <p className="text-sm text-center mt-8 text-gray-600">
          You’ve completed {completedTasks} out of {totalTasks} tasks (
          {percentage}%) 💪
        </p>
      )}
    </div>
  );
}

export default Stats;
