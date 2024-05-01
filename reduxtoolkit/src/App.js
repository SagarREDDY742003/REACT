
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
