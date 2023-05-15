import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/components/AppRouter.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

const App = () => {

    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
