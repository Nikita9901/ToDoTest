import * as React from 'react';
import styles from "./TodoListCompleted.module.css";
import {TodoItem} from "../index";
//import todosData from "../../app/data/todos";

interface todo{
    id:number,
    description:string,
    completed:boolean,
}

interface TodoListCompletedProps{
    todos?: Array<todo>,
}



const TodoListCompleted: React.FC<TodoListCompletedProps>=({todos})=>{
    if(todos!=null) {
        return (
            <div className={styles.ulStyle}>
                <ul className={styles.ulStyle} style={{ listStyle: 'none', margin: 0, padding: 0}}>
                    {todos.map((todo,index)=>{
                        return(
                            <div>
                                <TodoItem todo={todo} index={index}/>
                            </div>

                        )
                    })}
                </ul>
            </div>

        )
    }
    else{
        return null;
    }
}

export default TodoListCompleted;