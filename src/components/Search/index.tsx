import { ReactNode } from "react";

import styles from "./Search.module.scss"

interface SearchProps {
    children?: ReactNode;
    loading?: boolean;
    placeholder?: string;
}

const Search = ({ children }: SearchProps) => {
    return (
        <div className={`${styles.search} ${styles.loading}`}>
            <input type="text" />
            <i className={styles.icon}></i>
        </div>
    )
}

export default Search;