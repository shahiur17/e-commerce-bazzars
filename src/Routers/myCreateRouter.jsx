
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Fashion from '../Pages/Fashion/Fashion';
import Shouses from '../Pages/Shouses/Shouses';
import Watch from '../Pages/Watchës/Watch';
import Electronic from '../Pages/Electronics/Electronic';
import Gardens from '../Pages/Gardens/Gardens';

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
            }
          
        ]
    }
]);
export default myCreateRouter;