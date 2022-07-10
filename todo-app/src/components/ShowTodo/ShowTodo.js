import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./ShowTodo.css";


const ShowTodo = ({todo, setTodo}) => {


    const [edit,setedit] = useState("");

    const ondelete = ({id})=>{
        setTodo(todo.filter((item)=> item.id !== id))
      
    };

    // const onedit = ({item})=>{
  
    // };
    
    const  textchange = (event)=>{
        setedit(event.target.value);
    };
 

    return(


        <div className="todo_list">
            { todo.map((todo)=>(
                    <div className="list"> 
                        <div className="title">  {todo.title} </div>
                        <div className="opt ">
                            <input type="checkbox" className="check" onChange={textchange}/>


                                {/* <button className="del"  onClick= {()=>onedit(item)}>  EDIT</button> */}
                                
                                
                            <button className="del"  onClick= {()=>ondelete(todo)}> <DeleteIcon/></button>
                        </div>
                  </div>
                    
             ))}
        </div>

        );

    // return(

    //     <div>
    //         {todo.map((todo)=>(
    //             <li className="todo_list" key={todo.id}>
    //                 <input type="text" value={todo.title} 
    //                     className="list"
    //                     onChange={(event) => event.preventDefault()}
    //                 ></input>
    //                 <div>
    //                 <input type="checkbox" className="check" onChange={textchange}/>
    //                 <button className="del"  onClick= {()=>ondelete(todo)}> <DeleteIcon/></button>
    //                 </div>
    //             </li>
    //         ))}
    //     </div>
    // );

}

export default ShowTodo;