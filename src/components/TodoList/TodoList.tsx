/*import React from 'react'
import TodoItem from "../TodoItem";
import PropTypes from 'prop-types'
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props){
    return(
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList*/
import * as React from 'react';
import styles from "./TodoList.module.css";
import {TodoItem} from "../index";
//import todosData from "../../app/data/todos";

interface todo{
    id:number,
    description:string,
    completed:boolean,
}

interface TodoListProps{
    todos?: Array<todo>,
}



const TodoList: React.FC<TodoListProps>=({todos})=>{
    if(todos!=null) {
        return (
            <div className={styles.ulStyle}>
                <ul className={styles.ulStyle} style={{ listStyle: 'none', margin: 0, padding: 0}}>
                    {todos.map((todo,index)=>{
                        return(
                            <div key={todo.id}>
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

export default TodoList;
/*function TodoList(todos:Array<{id:typeof PropTypes.any, description:typeof PropTypes.string, completed:boolean}>, onToggle: typeof PropTypes.func, rmTodo: typeof PropTypes.func) {
    return(
        <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
            { todos.map((todo, index) => {
                return (
                    <TodoItem onChange={onToggle} todo={todo} rmTodo={rmTodo}
                              index={index} id={todo.id}
                              description={todo.description} completed={todo.completed}/>
                )
            })}
        </ul>
    )
}*/
