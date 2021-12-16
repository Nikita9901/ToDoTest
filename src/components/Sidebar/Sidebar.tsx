import * as React from 'react';
import styles from "./Sidebar.module.css"

const sidebarWidth = 52;

const Sidebar: React.FC = ({children}) => {
    return(
        <div style={{width: sidebarWidth}} className={styles.sidebar}>
            {children}
        </div>
    )
};

export default Sidebar;