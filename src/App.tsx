import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import classes from './App.module.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <header>Brand</header>
      <main>
        <HomePage />
        <button onClick={() => setCount((count) => count + 1)} className="btn">
          count is {count}
        </button>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
