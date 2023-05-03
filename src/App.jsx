import {useState} from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Login from "./components/Login.jsx";
import {AuthContext} from "./context/index.jsx";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isOpenMenu, setMenuOpen] = useState(false)


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Header
                    handleMenu={() => setMenuOpen(true)}
                />
                <Menu
                    menuOpen={isOpenMenu}
                    closeMenu={() => setMenuOpen(false)}
                />
                {/*<MainPage/>*/}
                <Login/>
            </BrowserRouter>
        </AuthContext.Provider>

  )
}

export default App
