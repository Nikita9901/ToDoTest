import * as React from 'react';
import styles from "./InputAndButton.module.css";

interface InputAndButtonProps{}

const InputAndButton: React.FC<InputAndButtonProps> = ({}) => {

    return (
        <div style={{display: "flex", flex:1, flexDirection:"row"}}>
            <input placeholder={"+ Add a task, press Enter to save"} className={styles.inputStyle}/>
            <div className={styles.button}>
                Add
            </div>
        </div>
    );
};

export default InputAndButton;