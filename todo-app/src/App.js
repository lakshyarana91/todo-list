import './App.css';
import React, {useState} from "react";
import Heading from "./components/heading/heading"
import Form from "./components/Form/Form"
import ShowTodo from "./components/ShowTodo/ShowTodo"

function App() {

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);



  return (
    <div className="app_container">
      <div className='todo_container'>
        <div>
          <Heading/>
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todo = {todo}
            setTodo = {setTodo}
          
          />
        </div>

        <div>
          <ShowTodo
            todo = {todo}
            setTodo = {setTodo}
          
          />
        </div>
      </div>

      
    </div>
  );
}

export default App;
