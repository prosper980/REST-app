import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/auth_components/SignupPage";
import { action as signupAction } from "./actions/signup.action";
import ErrorPage from "./errorPages/Signup-ErrorPage";
import Root from "./components/dashboard/Root";
import SignIn from "./components/auth_components/Signin";

import {loader as dashBoardLoader} from "./loaders/user.dashboard.loader"
import { loader as userLoginLoader } from "./loaders/auth.loader"

import { action as signinAction } from "./actions/signin.action"






const routes = createBrowserRouter([
    {
        path : "/",
        element : <SignUp />,
        action: signupAction,
        loader : userLoginLoader,
        errorElement : <ErrorPage />
    },
    {
        path : "/dashboard",
        element : <Root />,
        errorElement : <ErrorPage />,
        loader : dashBoardLoader
    },
    {
        path : "/signin",
        element : <SignIn />,
        action : signinAction

    } 
])


export default routes;