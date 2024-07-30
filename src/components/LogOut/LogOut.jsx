import styles from "./LogOut.module.scss";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { QuestionIcon } from "@assets/QuestionIcon";

export const LogOut = ({ onClose, setIsAuth }) => {
    const onClick = () => {
        localStorage.removeItem("token");
        setIsAuth(!!localStorage.getItem("token"));
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <div className={styles.modal}>
                <QuestionIcon />
                <h3>Вы действительно хотите выйти?</h3>
                <div className={styles.buttons}>
                    <Button type="default" onClick={onClose}>
                        Отменить
                    </Button>
                    <Button type="primary" onClick={() => onClick()}>
                        Выйти
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
