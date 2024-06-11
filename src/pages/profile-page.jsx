import { Input } from "../components/input"
import { Button } from "../components/button"

export function ProfilePage() {
  return (
    <div className="page">
      <div className="container">
        <form>
          <h1>Профиль</h1>
          <Input 
            text={"Фамилия"}
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            placeholder={"Фамилия"}
          />
          <Input 
            text={"Имя"}
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            placeholder={"Имя"}
          />
          <Input 
            text={"Отчество"}
            type={"text"}
            id={"patronymic"}
            name={"patronymic"}
            placeholder={"Отчество"}
          />
          <Input 
            text={"Номер телефона"}
            type={"text"}
            id={"telephone"}
            name={"telephone"}
            placeholder={"Номер телефона"}
          />
          <Input 
            text={"Email"}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Email"}
          />
          <Button>Обновить данные</Button>
        </form>
      </div>
    </div>
  )
}
