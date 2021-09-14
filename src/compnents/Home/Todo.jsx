import React from 'react';
import CreateTodo from './createTodo';

const Todo = (props) => {
    
    return(
        <div className="todoBody">
            <CreateTodo  create={props.create}/>
            <>
                {props.list.map(k=>{
                    let key = props.list.indexOf(k)
        return (
        <div className="task" key={key}>
        <input type="checkbox" 
               className="taskCheck"
               onChange={(()=>{props.done(key)})} 
               value={k.task} 
               checked={k.status?'checked':''}
               />

        <span className="taskDetail">{k.status?<del>{k.task}</del>:k.task}</span>

        <button className="taskDelete" onClick={(()=>{props.delete(key)})}>X</button>
        </div>
        )
    })}
            </>
        </div>
    )
}
export default Todo;