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
            <h1>ToDo List: </h1>
            <div className="box">
                <input onChange={getList} value={list}  placeholder="" style={{padding:'5px'}} />
                <button onClick={addFunc} style={{margin:'0px 10px', backgroundColor:'green', border:'none', color:'white', padding:'5px 8px', borderRadius:'5px'}}>Add</button>
            </div>
            <ul style={{}}>
                {item.map((element, index)=>(
                    <li key={index} style={{padding:"10px 0px"}}>
                        {element}
                        <button onClick={()=>delFunc(index)} style={{margin:'3px 20px', backgroundColor:'red', border:'none', color:'white', padding:'5px 8px', borderRadius:'5px'}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;