import "./index.scss";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { api } from "./api/api.js";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { AfishaPage } from "./pages/AfishaPage/AfishaPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { TicketsPage } from "./pages/TicketsPage/TicketsPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { FilmPage } from "./pages/FilmPage/FilmPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "afisha",
                element: <AfishaPage />,
                loader: async () => {
                    return await api
                        .get("/cinema/today")
                        .then((response) => response.data);
                }
            },
            {
                path: "profile",
                element: <ProfilePage />,
                loader: async () => {
                    return await api
                        .get("/users/session")
                        .then((response) => response.data);
                }
            },
            {
                path: "tickets",
                element: <TicketsPage />,
                loader: async () => {
                    return await api
                        .get("/cinema/orders")
                        .then(response => response.data);
                }
            },
            {
                path: "order",
                element: <OrderPage />,
                loader: async () => {
                    return await api
                        .get("/users/session")
                        .then((response) => response.data);
                }
            },
            {
                path: "film/:filmId",
                element: <FilmPage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
