import * as React from 'react';
import styles from "./Text.module.css";

interface TextProps{
    colorT?: string;
}

const Text: React.FC<TextProps> = ({
    children,
    colorT="black",
}) => {
    return (
        <div style={{color: colorT }} className={styles.textstyle}>
            {children}
        </div>
    );
};

export default Text;