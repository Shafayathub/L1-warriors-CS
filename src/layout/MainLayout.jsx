import { useState } from "react";
import { ThemeContext } from "../context";
import Home from "../pages/Home/Home";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`${darkMode ? "dark":""}`}>
      <ThemeContext.Provider  value={{ darkMode, setDarkMode }}>
      <Header />

<Home></Home>
      </ThemeContext.Provider>
    
    </div>
  );
};
export default MainLayout;
