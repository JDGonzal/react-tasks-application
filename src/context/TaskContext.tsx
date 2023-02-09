import { useState, createContext, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { tasks as data } from "../data/tasks";
let value :any;
export const TaskContext = createContext(value);

export function TaskContextProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  const [tasks, setTasks] = useState<any[]>([]);

  function createTask(task: { title: string; description: string; }) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId:any) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log("task", { tasks });
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
