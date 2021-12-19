/*import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

const styles={
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed){
        classes.push('done')
    }

    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index+1}.</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className={'rm'} onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}*/
import React, {useContext} from 'react'
import styles from "./TodoItem.module.css"
import {GarbageImage, EditImage} from "../../assets";
import Context from "../../app/context";



interface TodoItemProps{
    todo:{
        userId:number,
        id:number,
        title:string,
        completed:boolean,
    },
    index:number;
}

const TodoItem: React.FC<TodoItemProps>=({todo, index})=>{
    const {removeTodo} = useContext(Context)
    const {toggleTodo} = useContext(Context)
    if(todo!=null) {
        return (
            <li className={styles.item}>
                <span style={{display:"flex", alignItems: "center"} }>
                    <div>
                        <label className={styles.checkbox}>
                            <input
                                className={styles.checkboxInput}
                                type="checkbox"
                                onChange={()=>{
                                    toggleTodo(todo.id)}}
                                checked={false}
                            />
                            <span className={styles.checkboxCheckmarkBox}>
                                <span className={styles.checkboxCheckmark}></span>
                            </span>
                        </label>
                    </div>

                    &nbsp;
                    {todo.title}
                </span>
                <div className={styles.rm}>
                    <img src={EditImage} className={styles.imageStyle}/>
                    <img src={GarbageImage} onClick={()=>removeTodo(todo.id)} className={styles.imageStyle}/>
                </div>
            </li>
        )
    }
    else{
        return null;
    }
};

export default TodoItem;



/*function TodoItem(
    todo:{
        id: typeof PropTypes.any,
        description: typeof PropTypes.string,
        completed: boolean,
    },
    index:number,
    onChange: typeof PropTypes.func,
    rmTodo: typeof PropTypes.func)
{
    const classes = ['']

    return(
        <li className={styles.item}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    className={styles.inputStyle}
                    onChange={() => onChange(todo.id, '', '', '', '')}
                />
                <strong>{index+1}.</strong>
                &nbsp;
                {todo.description}
            </span>
            <button className={'rm'} onClick={() => rmTodo(todo.id, '', '', '', '')}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    rmTodo: PropTypes.func,
}*/