import styles from "./PageHeader.module.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LogoIcon } from "@assets/LogoIcon";
import { UserIcon } from "@assets/UserIcon";
import { TicketIcon } from "@assets/TicketIcon";
import { ExitIcon } from "@assets/ExitIcon";
import { LogOn } from "../LogOn/LogOn";
import { LogOut } from "../LogOut/LogOut";
import { MovieIcon } from "../../assets/MovieIcon";

export const PageHeader = () => {
    const [isModal, setIsModal] = useState(false);
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

    const Modal = {
        true: (
            <LogOut onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
        ),
        false: <LogOn onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
    };

    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.page_header}>
                        <div className={styles.left}>
                            <Link className={styles.link} to="/afisha">
                                <LogoIcon className={styles.logo_icon} />
                                <MovieIcon className={styles.movie_icon} />
                                <span
                                    className={`${styles.label} ${styles.afisha}`}
                                >
                                    Афиша
                                </span>
                            </Link>
                            <Link className={styles.link} to="/profile">
                                <UserIcon />
                                <span className={styles.label}>Профиль</span>
                            </Link>
                            <Link className={styles.link} to="/tickets">
                                <TicketIcon />
                                <span className={styles.label}>Билеты</span>
                            </Link>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.link}>
                                <ExitIcon />
                                <span
                                    className={styles.label}
                                    onClick={() => setIsModal(true)}
                                >
                                    {isAuth ? "Выйти" : "Войти"}
                                </span>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {isModal && Modal[isAuth]}
            <Outlet />
        </>
    );
};
