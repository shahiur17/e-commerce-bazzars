import { Outlet } from "react-router-dom";
import Navbars from "../components/Layouts/Navbars";


const MainLayout = () => {
    return (
        <div>
            <Navbars></Navbars>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;

