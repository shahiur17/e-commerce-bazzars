import { Outlet } from "react-router-dom";
import Navbars from "../components/Layouts/Navbars";
import FootersSec from "../components/Footer/FootersSec";


const MainLayout = () => {
    return (
        <div>
            <Navbars></Navbars>
            <div>
            <Outlet></Outlet>
            </div>
            <FootersSec></FootersSec>
        </div>
    );
};

export default MainLayout;

