
import './App.css';
import Form from './components/form/Form';
import Todo from './components/todos/Todo';

function App() {

  let todos = ['read a book', "go jogging", "sleep"]; 
  return (
    <div className="App">
      <Form />
      <Todo todos = {todos} />
    </div>
  );
}

export default App;
