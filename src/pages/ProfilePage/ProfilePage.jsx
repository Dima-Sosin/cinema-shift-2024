import { PageLayout } from "@components/PageLayout/PageLayout"
import { useLoaderData } from "react-router-dom"
import { FormikField } from "@components/FormikField/FormikField"
import { Button } from "@components/Button/Button"

export const ProfilePage = () => {
    const data = useLoaderData()
    const user = data.user
    return (
        <PageLayout>
            <h1>Профиль</h1>
            {/* {data.succes && (
                <form>
                    <Input
                        text="Фамилия"
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Фамилия"
                        defaultValue={user?.lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <Input
                        text="Имя"
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Имя"
                        defaultValue={user?.firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <Input
                        text="Отчество"
                        type="text"
                        id="middlename"
                        name="middlename"
                        placeholder="Отчество"
                        defaultValue={user?.middlename}
                        onChange={(event) => setPatronymic(event.target.value)}
                    />
                    <Input
                        text="Номер телефона"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Номер телефона"
                        defaultValue={user?.phone}
                        onChange={(event) => setTelephone(event.target.value)}
                    />
                    <Input
                        text="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={user?.email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        text="Город"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Город"
                        defaultValue={user?.city}
                        onChange={(event) => setTown(event.target.value)}
                    />
                    <Button type="primary" onClick={() => {}}>Обновить данные</Button>
                </form>
            )} */}
        </PageLayout>
    )
}
