import { Outlet } from "react-router-dom";
import Navber from "../Componets/Navber/Navber";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navber></Navber>
          
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
