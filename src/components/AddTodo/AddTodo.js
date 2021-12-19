import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from "./AddTodo.module.css"

function useInputValue(defaultValue=''){
    const [value, setValue] = useState(defaultValue)

    return {
        bind:{
            value,
            onChange:event => setValue(event.target.value)
        },
        clear: () =>setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('')

    function submitHandler(event){
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div style={{display: "flex", flex:1, flexDirection:"row"}}>
                <input {...input.bind} placeholder={"+ Add a task, press Enter to save"} className={styles.inputStyle}/>
                <div className={styles.button} onClick={submitHandler}>
                    Add
                </div>
            </div>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo