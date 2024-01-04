import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/auth_components/SignupPage";
import { action as signupAction } from "./actions/signup.action";
import ErrorPage from "./errorPages/Signup-ErrorPage";
import Root from "./components/dashboard/Root";
import {loader as dashBoardLoader} from './loaders/user.dashboard.loader'





const routes = createBrowserRouter([
    {
        path : "/",
        element : <SignUp />,
        action: signupAction,
        errorElement : <ErrorPage />
    },
    {
        path : "/dashboard",
        element : <Root />,
        errorElement : <ErrorPage />,
        loader : dashBoardLoader
    },
    {
        path : "/login/federated/google",
        element : <h2> google </h2>
    } 
])


export default routes;