
import React from "react";
import {v4 as uuidv4} from "uuid";
import "./Form.css";


const Form = ({input, setInput, todo, setTodo}) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodo([...todo, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }
        
    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="add todo..." 
                spellCheck = "true" 
                className="text_input" 
                value={input} 
                required 
               onChange={onInputChange}
            />
            <button className="button_add" type="submit">Add</button>

        </form>
    );
};

export default Form;