import React, { useState } from "react";
import './todolist.css'

const ToDoList=()=>{
    const [list,setList] = useState();
    const [item,showItem] = useState([]);
    
    function getList(e){
        setList(e.target.value);
        
    }
    function addFunc(){
        showItem([...item, list]);  // concatenate the 2 lists
        setList('');    // empty the input box value
    }
    function delFunc(index){
        showItem(item.filter((listItems,i)=>i!==index));
        // console.log(e.target.parentElement.remove())
    };
    return(
        <div className="container">
            <h2>ToDo List: </h2>
            <div className="box">
                <input onChange={getList} value={list}  placeholder="" style={{}} />
                <button onClick={addFunc} style={{}}>Add</button>
            </div>
            <ul style={{}}>
                {item.map((element, index)=>(
                    <li key={index}>
                        <span>{element}</span>
                        <button onClick={()=>delFunc(index)} style={{}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;