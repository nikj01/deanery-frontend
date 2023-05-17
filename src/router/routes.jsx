import Login from "../modules/LoginPage/components/Login.jsx";
import {PersonPage} from "../modules/PersonPage/index.jsx";
import MainPage from "../modules/MainPage/components/MainPage.jsx";

// private: true

export const routes = [
    {path: 'login', element: <Login/>},
    {path: 'main', element: <MainPage/>},
    {path: 'me', element: <PersonPage/>},
    // {path: 'about', element: <PersonPage/>, private: true},
]
