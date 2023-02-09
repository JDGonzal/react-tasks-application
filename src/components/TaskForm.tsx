import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handelSubmit = (e:any) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handelSubmit} className="bg-slate-800 p-10 mb-4">
				<h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          id="idTask"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
					className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        ></input>
        <textarea
          name=""
          id="idDescription"
          cols={30}
          rows={3}
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
					className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
