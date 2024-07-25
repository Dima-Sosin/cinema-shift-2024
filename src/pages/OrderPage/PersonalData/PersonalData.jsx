import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { PageContext } from "../OrderPage";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";

export const PersonalData = () => {
    const { setPage } = useContext(PageContext);
    const data = useLoaderData();

    const onSubmit = (event) => {
        event.stopPropagation();
        setPage("debitCard");
    };

    return (
        <>
            <h1>Введите ваши данные</h1>
            {data.success && (
                <form>
                    <Input
                        text="Фамилия*"
                        type="text"
                        id="profile-lastname"
                        name="lastname"
                        placeholder="Фамилия"
                        defaultValue={data.user?.lastname}
                    />
                    <Input
                        text="Имя*"
                        type="text"
                        id="profile-firstname"
                        name="firstname"
                        placeholder="Имя"
                        defaultValue={data.user?.firstname}
                    />
                    <Input
                        text="Отчество"
                        type="text"
                        id="profile-middlename"
                        name="middlename"
                        placeholder="Отчество"
                        defaultValue={data.user?.middlename}
                    />
                    <Input
                        text="Телефон*"
                        type="text"
                        id="profile-phone"
                        name="phone"
                        placeholder="Телефон"
                        defaultValue={data.user?.phone}
                    />
                    <Input
                        text="Email"
                        type="text"
                        id="profile-email"
                        name="email"
                        placeholder="Email"
                        defaultValue={data.user?.email}
                    />
                    <Input
                        text="Город"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Город"
                        defaultValue={data.user?.city}
                        onChange={event => setTown(event.target.value)}
                    />
                    <Button 
                        type="primary" 
                        onClick={(event) => onSubmit(event) }
                    >
                        Продолжить
                    </Button>
                </form>
            )}
        </>
    );
};
