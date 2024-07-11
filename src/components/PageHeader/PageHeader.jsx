import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/LogoIcon";
import { UserIcon } from "../../assets/UserIcon";
import { TicketIcon } from "../../assets/TicketIcon";
import { ExitIcon } from "../../assets/ExitIcon";

export const PageHeader = () => (
    <div className="page">
        <div className="container">
            <div className={styles.page_header}>
                <nav className={styles.left}>
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                    <Link className={styles.block} to="/profile">
                        <div className={styles.svg}>
                            <UserIcon />
                        </div>
                        <span className={styles.link}>Профиль</span>
                    </Link>
                    <Link className={styles.block} to="/tickets">
                        <div className={styles.svg}>
                            <TicketIcon />
                        </div>
                        <span className={styles.link}>Билеты</span>
                    </Link>
                </nav>
                <div className={styles.block}>
                    <div className={styles.svg}>
                        <ExitIcon />
                    </div>
                    <span className={styles.link}>Выйти</span>
                </div>
            </div>
        </div>
    </div>
);
