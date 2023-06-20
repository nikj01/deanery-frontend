import LoginPage from "../modules/LoginPage/LoginPage.jsx";
import {PersonPage} from "../modules/PersonPage/index.jsx";
import MainPage from "../modules/MainPage/components/MainPage.jsx";

// private: true

export const routes = [
    {path: 'login', element: <LoginPage/>},
    {path: 'main', element: <MainPage/>},
    {path: 'me', element: <PersonPage/>},
    // {path: 'about', element: <PersonPage/>, private: true},
]
