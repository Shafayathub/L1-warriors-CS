
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div >
      <Header />
      <Outlet/>
    </div>
  );
};
export default MainLayout;
