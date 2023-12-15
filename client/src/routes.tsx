import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/auth_components/SignupPage";
import { action as signupAction } from "./actions/signup.action";
import ErrorPage from "./errorPages/Signup-ErrorPage";
import Root from "./components/dashboard/Root";





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
        errorElement : <ErrorPage />
    },
    {
        path : "/login/federated/google",
        element : <h2> google </h2>
    } 
])


export default routes;