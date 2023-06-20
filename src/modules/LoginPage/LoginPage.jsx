import {Navigate} from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import useLogin from "./hooks/useLogin.jsx";

const LoginPage = () => {
    const {
        setPassword,
        setUsername,
        error,
        redirect,
        clearError,
        handleSubmit} = useLogin();

    const loginForm = <LoginForm handleSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword}/>;
    const errorMessage = error ? <ErrorMessage open={open} clearError={clearError}/> : null;
    const redirected = redirect ? <Navigate to='/me'/> : null;

    return (
        <div>
            {loginForm}
            {errorMessage}
            {redirected}
        </div>
    );

}

export default LoginPage;
