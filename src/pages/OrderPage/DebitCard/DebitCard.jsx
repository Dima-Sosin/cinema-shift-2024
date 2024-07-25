import styles from "./DebitCard.module.scss"
import { useState, useContext } from "react"
import { PageContext } from "../OrderPage"
import { FormikField } from "@components/FormikField/FormikField"
import { Button } from "@components/Button/Button"

export const DebitCard = () => {
    const { setStage } = useContext(PageContext)
    const [isModal, setIsModal] = useState(false)

    const onSubmit = () => {

    }

    return (
        <>
            <h1>Введите данные карты для оплаты</h1>
            {/* <form>
                <div className={styles.block}>
                    <Input
                        text="Номер*"
                        type="text"
                        id="cart-pan"
                        name="pan"
                        placeholder="0000 0000"  
                    />
                    <div className={styles.lower}>
                        <Input
                            text="Срок*"
                            type="expireDate"
                            id="cart-expireDate"
                            name="expireDate"
                            placeholder="мм/гг"
                        />
                        <Input
                            text="CVV*"
                            type="text"
                            id="cart-cvv"
                            name="cvv"
                            placeholder="000"
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button type="default" onClick={() => setStage("personalData")}>
                        Назад
                    </Button>
                    <Button type="primary" onClick={() => onSubmit()}>
                        Оплатить
                    </Button>
                </div>
            </form>
            {isModal && (
                <ModalSuccess
                    onClose={() => {
                        setIsModal(false)
                    }}
                />
            )} */}
        </>
    )
}