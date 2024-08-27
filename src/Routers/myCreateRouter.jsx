
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Fashion from '../Pages/Fashion/Fashion';
import Shouses from '../Pages/Shouses/Shouses';
import Watch from '../Pages/Watchës/Watch';
import Electronic from '../Pages/Electronics/Electronic';
import Gardens from '../Pages/Gardens/Gardens';
import Login from '../Pages/LoginPages/Login';
import SingUp from '../Pages/LoginPages/SingUp';

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path: "/fashion",
                element: <Fashion></Fashion>,
            },
            {
                path: "/shous",
                element: <Shouses></Shouses>,
            },
            {
                path: "/watch",
                element: <Watch></Watch>,
            },
            {
                path: "/electronic",
                element:<Electronic></Electronic>,
            },
            {
                path:"/garden",
                element: <Gardens></Gardens>
            },
            {
                path:"/login",
                element: <Login></Login>,
            },
            {
                path:"/singup",
                element: <SingUp></SingUp>,
            }
          
        ]
    }
]);
export default myCreateRouter;
