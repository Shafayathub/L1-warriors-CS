import { useState } from "react";
import { ThemeContext } from "./context";
import MainLayout from "./layout/MainLayout";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div  className={` ${darkMode ? "dark":""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MainLayout></MainLayout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
