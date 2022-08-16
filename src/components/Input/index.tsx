import React from "react";

import styles from "./Input.module.scss";

interface InputProps {
    id: string;
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    onChange?: void;
    inputSetState?: void;    
}

const Input: React.FC<InputProps> = ({ id, type, name, label, placeholder, onChange, inputSetState }:InputProps ) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={ id }>{ label }</label>
            <div>
                <input type={ type } name={ name } id={ id } placeholder={ placeholder } />
            </div>
        </div>
    );
}

export default Input;