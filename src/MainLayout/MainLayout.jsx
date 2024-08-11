import { Outlet } from "react-router-dom";
import Navbars from "../components/Layouts/Navbars";


const MainLayout = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;