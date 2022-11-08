import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";
import Main from "../layout/Main";
import Login from "../component/Login";
import Work from "../component/Work"
import Services from "../component/Services";
import Registration from "../component/Registration"
import CheckOut from "../component/CheckOut"

let route = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children : [
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/signup",
                element:<Registration></Registration>,
            },
            {
                path:"/work",
                element:<Work></Work>,
                loader: async ()=>{ 
                    return fetch(`https://b611-service-review-server.vercel.app/work`)
                }
            },
            {
                path:"/services",
                element:<Services></Services>,
            },
            {
                path:"/checkout/:id",
                element:<CheckOut></CheckOut>,
            },
            
        ]
    }
]);

export default route;