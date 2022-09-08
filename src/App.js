import "./styles.css";
import Increment from "./Increment.js";
import Decrement from "./Decrement.js";
export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>Increment: </p>
      <h3>
        <Increment />
      </h3>

      <p>Decrement: </p>
      <h3>
        <Decrement />
      </h3>
    </div>
  );
}
