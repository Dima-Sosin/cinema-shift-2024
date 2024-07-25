import styles from "./PageLayout.module.scss";

export const PageLayout = ({ children, className = "" }) => (
    <div className={`${styles.page} ${className}`}>
        <div className={styles.container}>{children}</div>
    </div>
);
