import Login from "../modules/LoginPage/components/Login.jsx";
import {PersonPage} from "../modules/PersonPage/index.jsx";

export const routes = [
    {path: 'login', element: <Login/>},
    {path: 'me', element: <PersonPage/>, private: true},
    {path: 'about', element: <PersonPage/>, private: true},
]
