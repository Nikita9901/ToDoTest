import * as React from 'react';
import styles from "./Header.module.css"

const headerHeight = 64;

const Header: React.FC = ({children}) => {
    return(
        <div style={{height: headerHeight}} className={styles.header}>
            {children}
        </div>
    )
};

export default Header;