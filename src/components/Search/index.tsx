import { ReactNode, KeyboardEvent } from "react";

import styles from "./Search.module.scss"

interface SearchProps {
    children?: ReactNode;
    loading?: boolean;
    placeholder?: string;
}

const Search = ({ children }: SearchProps) => {
    const handleSearchKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        console.info(   "keyUp", e.target)
    }

    return (
        <div className={`${styles.search} ${styles.loading}`}>
            
            <input type="text" onKeyUp={handleSearchKeyUp} ref="search-input" />
            <i className={styles.icon}></i>
        </div>
    )
}

export default Search;