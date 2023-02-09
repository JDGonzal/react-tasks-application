import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard( {task}: any) {
  const { deleteTask }:any = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-lg font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-sm" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
