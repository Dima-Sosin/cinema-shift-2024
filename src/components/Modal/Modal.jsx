import styles from "./Modal.module.scss";
import { CloseIcon } from "@assets/CloseIcon.jsx";

export const Modal = ({ children, onClose }) => (
    <div className={styles.modal}>
        <div className={styles.modal_content}>
            <div className={styles.close} onClick={onClose}>
                <CloseIcon />
            </div>
            {children}
        </div>
    </div>
);
