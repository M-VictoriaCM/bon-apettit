import { Outlet } from "react-router";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="bg-white dark:bg-black">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default PublicLayout;