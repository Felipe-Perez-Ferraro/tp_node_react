import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Hola mundo");

  const handleChangeTitle = () => {
    const titleOptions = ["Hello world", "Boeeenas", "Hola mundo", "Que onda"];
    setTitle(titleOptions[Math.floor(Math.random() * titleOptions.length)]);
  };

  return (
    <section>
      <div>
        <h1>{title} desde React - P3</h1>
        <button type="button" onClick={handleChangeTitle}>
          Cambiar título
        </button>
      </div>
    </section>
  );
}

export default App;
