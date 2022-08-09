import styles from './Loading.module.scss'

interface LoadingProps {
    loadingText?: string;
}

const Loading = ({ loadingText }: LoadingProps) => {
    return (
        <div className={styles.container}>
            <i className={styles.icon}></i>
            {
                loadingText && (
                    <footer className={styles.footer}>
                        <span>{ loadingText }</span>
                    </footer>
                )
            }
        </div>
    )
}

export default Loading;