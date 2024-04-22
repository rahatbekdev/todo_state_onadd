import { useState } from "react";
// import { TodoForm } from "./assets/components/todo-form/TodoForm";
import { AddTodo } from "./assets/components/add-todo/AddTodo";
import { CreateTodo } from "./assets/components/create-todo/CreateTodo";

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

  const onAddTodo = (data) => {

    const NewText=[...todo,data]
    setTodo(NewText)
    
    
  };
  // console.log(todo);
  return (
    <div>
      <AddTodo onAdd={onAddTodo} />
      <CreateTodo data={todo} />
      {/* <TodoForm /> */}
    </div>
  );
};

export default App;
