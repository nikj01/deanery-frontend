import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import {routes} from "../routes.jsx";
import Layout from "../../modules/Layout/components/Layout.jsx";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.private ? <PrivateRoute element={route.element}/> : route.element
                        }
                    />
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;
