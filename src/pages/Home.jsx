import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState(["Studiare React", "Fare la spesa", "Allenarsi"]);

  return (
    <div>
      <h1>Lista To-Do</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
