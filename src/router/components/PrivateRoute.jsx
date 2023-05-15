import {Navigate} from "react-router-dom";
import {useAuth} from "../../context/hooks/useAuth.jsx";

const PrivateRoute = ({children}) => {
    const {isAuth} = useAuth();

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return children;
};

export default PrivateRoute;
