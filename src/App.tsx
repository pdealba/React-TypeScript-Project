import Todos from "./component/Todos";
import todo from "./models/todo";

function App() {
  const todos = [new todo("Learn React"), new todo("Learn TypeScript")];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
