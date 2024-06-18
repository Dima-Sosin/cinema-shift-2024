import { useState } from "react"
import { Input } from "../components/input"
import { Button } from "../components/button"

export function ProfilePage() {
    const [lastName, setLastName] = useState(localStorage.getItem("lastName"))
    const [firstName, setFirstName] = useState(localStorage.getItem("firstName"))
    const [patronymic, setPatronymic] = useState(localStorage.getItem("patronymic"))
    const [telephone, setTelephone] = useState(localStorage.getItem("telephone"))
    const [email, setEmail] = useState(localStorage.getItem("email"))

    const btnClick = (event) => {
        event.preventDefault()
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("patronymic", patronymic)
        localStorage.setItem("telephone", telephone)
        localStorage.setItem("email", email)
    }

    return (
        <div className="page">
            <div className="container">
                <form className="form">
                    <h1>Профиль</h1>
                    <Input
                        text={"Фамилия"}
                        type={"text"}
                        id={"lastName"}
                        name={"lastName"}
                        placeholder={"Фамилия"}
                        defaultValue={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <Input
                        text={"Имя"}
                        type={"text"}
                        id={"firstName"}
                        name={"firstName"}
                        placeholder={"Имя"}
                        defaultValue={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <Input
                        text={"Отчество"}
                        type={"text"}
                        id={"patronymic"}
                        name={"patronymic"}
                        placeholder={"Отчество"}
                        defaultValue={patronymic}
                        onChange={(event) => setPatronymic(event.target.value)}
                    />
                    <Input
                        text={"Номер телефона"}
                        type={"text"}
                        id={"telephone"}
                        name={"telephone"}
                        placeholder={"Номер телефона"}
                        defaultValue={telephone}
                        onChange={(event) => setTelephone(event.target.value)}
                    />
                    <Input
                        text={"Email"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        defaultValue={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button onClick={btnClick}>Обновить данные</Button>
                </form>
            </div>
        </div>
    )
}
