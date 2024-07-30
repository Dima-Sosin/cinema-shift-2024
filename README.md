# Cinema ШИФТ

Проект реализует полноценное web-приложение кинотеатра, и полностью имитирует все его основные функции. На сайте можно просмотреть афишу фильмов, увидеть подробную информацио о каждом фильме, а также просмотреть список сеансов, и заказать билеты. На странице с билетами также можно просмотреть уже купленные билеты. Это возможно благодаря реализации авторизованной зоны, авторизация происходит через номер телефона и код из СМС. Благодаря авторизованной зоне также реализован профиль пользователя, в котором можно изменить или просмотреть свои данные: ФИО, номер телефона, email, город.

### Основной стек технологий:
* Фреймворк (библиотека) - [React](https://react.dev/) + JavaScript
* Сборщик приложения - [Vite](https://vitejs.dev/)
* Чистота кода - [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Husky](https://www.npmjs.com/package/husky) + [Lint Staged](https://www.npmjs.com/package/lint-staged)
* Стилизация - [Sass](https://sass-lang.com/) + [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
* Маршрутизация - [React Router Dom](https://reactrouter.com/en/main)
* Получение данных с сервера - [Axios](https://www.npmjs.com/package/axios)
* State-manager - [MobX](https://www.npmjs.com/package/mobx)
* Обработка и валидация форм [Formik](https://formik.org/) + [Yup](https://www.npmjs.com/package/yup)
* Создание масок ввода [React Input Mask](https://www.npmjs.com/package/react-input-mask)

Этот проект реализует frontend часть web-приложения кинотетра, данные для вывода берутся из [backendа](https://shift-backend.onrender.com/api#/), написанного ШИФТ.

---

### На данный момент реализованы несколько страниц:
* **Афиша** - на этой странице представлены фильмы, которые находятся в данных момент в прокате;
* **Индивидуальная страница фильма** - на ней представлена вся подробная информация по индивидуальному фильму, также на ней можно просмотреть расписание сеансов и выбрать места для покупки в зале;
* **Оформление заказа билетов** реализует функционал оформления заказа и состоит из двух страниц:
  * Страница для ввода персональных данных;
  * Страница ввода данных банковской карты;
* **Профиль** - страница, на которой можно просмотреть и редактировать данные пользователя, такие как ФИО, номер телефона, email, город;
* **Билеты** - страница с полным списком заказынных билетов конкретного пользователя, на ней можно вернуть билеты по конкретному заказу;

Также релизуется возможность входа или выхода из своего аккаунта, вход осуществляется по номеру телефона и смс коду.

|Страница "Афиша"||
|:--------------:|:--------------:|
|![image](https://github.com/user-attachments/assets/b183a1dd-f166-49e8-8951-861938389e09)||
|**Страница "Фильм", основная информация**|**Страница "Фильм", расписание и зал**|
|![image](https://github.com/user-attachments/assets/2cb6bb43-91b8-4ef2-8078-f96b38e93c1c)|![image](https://github.com/user-attachments/assets/3c28da81-bb96-4f9d-9b3b-eb68a681a71c)|
|**Оформление билетов, персональные данные**|**Оформление билетов, данные карты**|
|![image](https://github.com/user-attachments/assets/0da0f4c2-fcf1-4368-80dc-3a5b79920097)|![image](https://github.com/user-attachments/assets/807b276d-8af3-401d-9ecc-d2fb508676a0)|
|**Страница "Профиль"**|**Страница "Билеты"**|
|![image](https://github.com/user-attachments/assets/b49f64ca-0d58-4952-8b14-9723a5efe79d)|![image](https://github.com/user-attachments/assets/64e47a19-39d1-45b6-a2a0-ec935e6e83ac)|
