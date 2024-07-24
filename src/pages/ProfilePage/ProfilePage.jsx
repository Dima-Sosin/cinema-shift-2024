import { PageLayout } from "@components/PageLayout/PageLayout"
import { Input } from "@components/Input/Input"
import { Button } from "@components/Button/Button"

export const ProfilePage = () => {

    return (
        <PageLayout>
            <form>
                <h2>Профиль</h2>
                <Input
                    text="Фамилия"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Фамилия"
                    defaultValue={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <Input
                    text="Имя"
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Имя"
                    defaultValue={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <Input
                    text="Отчество"
                    type="text"
                    id="middlename"
                    name="middlename"
                    placeholder="Отчество"
                    defaultValue={patronymic}
                    onChange={(event) => setPatronymic(event.target.value)}
                />
                <Input
                    text="Номер телефона"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Номер телефона"
                    defaultValue={phone}
                    onChange={(event) => setTelephone(event.target.value)}
                />
                <Input
                    text="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    text="Город"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Город"
                    defaultValue={city}
                    onChange={(event) => setTown(event.target.value)}
                />
                <Button type="primary" onClick={() => {}}>Обновить данные</Button>
            </form>
        </PageLayout>
    )
}
