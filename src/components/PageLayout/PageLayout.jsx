import styles from "./PageLayout.module.scss";

export function PageLayout({ children, className = "" }) {
    return (
        <div className={`${styles.page} ${className}`}>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
