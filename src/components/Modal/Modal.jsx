import { CloseIcon } from "@assets/CloseIcon.jsx";
import styles from "./Modal.module.scss";

export function Modal({ children, onClose }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.close} onClick={onClose}>
                    <CloseIcon />
                </div>
                {children}
            </div>
        </div>
    );
}
