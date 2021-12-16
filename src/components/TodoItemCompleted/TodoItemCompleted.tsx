import React, {useContext} from 'react'
import styles from "./TodoItemCompleted.module.css"
import {GarbageImage} from "../../duck";
import Context from "../../app/context";



interface TodoItemCompletedProps{
    todo:{
        id:number,
        description:string,
        completed:boolean,
    },
    index:number;
}

const TodoItemCompleted: React.FC<TodoItemCompletedProps>=({todo})=>{
    const {removeTodoCompleted} = useContext(Context)
    const {toggleTodoCompleted} = useContext(Context)
    if(todo!=null) {
        return (
            <li className={styles.item}>
                <span style={{display:"flex", alignItems: "center"} } className={styles.done}>
                    <div>
                        <label className={styles.checkbox}>
                            <input className={styles.checkboxInput} type="checkbox" checked={true} onChange={()=>toggleTodoCompleted(todo.id)}/>
                            <span className={styles.checkboxCheckmarkBox}>
                                <span className={styles.checkboxCheckmark}></span>
                            </span>
                        </label>
                    </div>

                    &nbsp;
                    {todo.description}
                </span>
                <div className={styles.rm}>
                    <img alt={"GarbageImage"} src={GarbageImage} onClick={()=>removeTodoCompleted(todo.id)} className={styles.imageStyle}/>
                </div>
            </li>
        )
    }
    else{
        return null;
    }
};

export default TodoItemCompleted;