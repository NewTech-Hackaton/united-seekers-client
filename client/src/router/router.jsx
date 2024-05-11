import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/search.jsx";
import Registration from "../pages/registration.jsx";
import Authorization from "../pages/authorization.jsx";
import ApplyPage from "../pages/apply-page.jsx";
import Profile from "../pages/profile.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />
    },
    {
        path: "/reg",
        element: <Registration />
    },
    {
        path: "/auth",
        element: <Authorization />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/apply",
        element: <ApplyPage />
    }
]);