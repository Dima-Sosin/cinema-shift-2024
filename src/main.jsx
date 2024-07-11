import "./index.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { api } from "./api/api.js";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { AfishaPage } from "./pages/AfishaPage/AfishaPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { TicketPage } from "./pages/TicketPage/TicketPage";
import { FilmPage } from "./pages/FilmPage/FilmPage";
import store from "./store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "afisha",
                element: <AfishaPage />,
                loader: () => {
                    return api.get("/pizza/catalog").then((data) => data);
                }
            },
            {
                path: "profile",
                element: <ProfilePage />,
                loader: () => {
                    returnapi
                        .get("/users/session", {}, localStorage.getItem("token"))
                        .then((data) => data);
                }
            },
            {
                path: "tickets",
                element: <TicketPage />,
                loader: () => {
                    return api
                        .get("/cinema/orders", {}, localStorage.getItem("token"))
                        .then((data) => data);
                }
            },
            {
                path: "film/:filmId",
                element: <FilmPage />,
                loader: () => {
                    const { filmId } = useParams();
                    return api.get("/cinema/film/" + filmId).then((data) => data);
                }
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
