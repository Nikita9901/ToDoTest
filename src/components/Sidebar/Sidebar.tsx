import * as React from 'react';
import styles from "./Sidebar.module.css"


const Sidebar: React.FC = ({children}) => {
    return(
        <div className={styles.sidebar}>
            {children}
        </div>
    )
};

export default Sidebar;