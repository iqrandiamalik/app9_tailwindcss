import {Outlet} from "react-router-dom";
import Appheader from "./Appheader";
import Footer from "./Footer";
const Layout = () => {
    return (
        <div>
            <Appheader/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;
