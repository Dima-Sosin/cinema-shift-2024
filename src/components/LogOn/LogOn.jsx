import { createContext, useState } from "react";
import { ModalPhone } from "./ModalPhone";
import { ModalCode } from "./ModalCode";

export const ModalContext = createContext("phone");

export const LogOn = ({ onClose, setIsAuth }) => {
    const [modal, setModal] = useState("phone");
    const [phone, setPhone] = useState("");

    const Modals = {
        phone: <ModalPhone onClose={onClose} setPhone={setPhone} />,
        code: (
            <ModalCode onClose={onClose} setIsAuth={setIsAuth} phone={phone} />
        )
    };

    return (
        <ModalContext.Provider value={{ setModal }}>
            {Modals[modal]}
        </ModalContext.Provider>
    );
};
