import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
