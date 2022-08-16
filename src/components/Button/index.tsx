import React from "react";

import styles from './Button.module.scss'

interface IButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    children?: React.ReactNode;
    handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    fixed?: boolean;
}

const Logout: React.FC<IButtonProps>  = ({children, type, handleClick, fixed}:IButtonProps) => {
    
    return (
        <button className={`${styles.btn} ${(fixed)? styles['btn--fixed']: ''}`} type={type} role="button" onClick={handleClick}>{children}</button>
    )
}

export default Logout;