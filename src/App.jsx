import { useState } from "react";
import { TodoForm } from "./assets/components/todo-form/TodoForm";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "Joe",
      title: "todo app",
      phone: "01046982488",
      email: "joe@gmail.com",
    },
    {
      id: 2,
      name: "Sarah",
      title: "todo app",
      phone: "01046982488",
      email: "sarah@gmail.com",
    },
    {
      id: 3,
      name: "Archi",
      title: "todo app",
      phone: "01046982488",
      email: "archi@gmail.com",
    },
  ]);
  console.log(todo);
  return (
    <div>
      <TodoForm />
    </div>
  );
};

export default App;
