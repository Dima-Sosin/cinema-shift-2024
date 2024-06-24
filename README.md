# Cinema ШИФТ
Проект написан при помощи web-технологий таких как **HTML**, **CSS**, **JavaScript**, в качестве фреймворка использована популярная библиотека [React](https://react.dev/).
В качесте сборщика приложения используется [Vite](https://vitejs.dev/).

Этот проект реализует frontend часть web-приложения кинотетра, данные для вывода берутся из [backendа](https://shift-backend.onrender.com/api#/), написанного ШИФТ.

Для написания стилей в данном проекте используется технология [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/), позволяющая не придерживаться БЭМ методологии.

Навигации по сайту осуществляется благодаря библиотеке [react-router-dom](https://reactrouter.com/en/main), она позволяет легко реализовать навигацию на сайте. 

Быстрый доступ к своей учетной записи реализуется благодаря сохранению данных в ***localStorage***.

Также для удобства написания кода, в этом проекте активно используется библиотека для форматирования кода [Prettier](https://prettier.io/).
___
На данный момент реализованы несколько страниц:
* **Афиша** - на этой странице представлены фильмы, которые находятся в данных момент в прокате;
* **Индивидуальная страница фильма** - на ней представлена основная информация о фильме, также на этой странице реализовано расписание фильма и создана возможность посмотреть занятые места в зале и выбрать интересующие;
* **Профиль** - страница, на которой представлены основная информация о пользователе (ФИО, номер телефона, email).
___
|Страница "Афиша"|Страница "Профиль"|
|:--------------:|:--------------:|
|![image](https://github.com/Dima-Sosin/cinema-shift-2024/assets/127529532/d899cddd-09e2-4df6-8a99-6a7a083d5f11)|![image](https://github.com/Dima-Sosin/cinema-shift-2024/assets/127529532/056e04e4-9338-49d7-94fe-eee2df0dfebe)|
|**Страница "Фильм", основная информация**|**Страница "Фильм", расписание и зал**|
|![image](https://github.com/Dima-Sosin/cinema-shift-2024/assets/127529532/14af5315-0c76-48af-bf7f-fce7a5cc645b)|![image](https://github.com/Dima-Sosin/cinema-shift-2024/assets/127529532/11421a59-85f3-497b-b17c-a67e2d279ed1)|
