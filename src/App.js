import "./App.css";
import { useDarkMode } from "usehooks-ts";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`App flex bg-gray-500 ${isDarkMode ? "dark" : ""}`}>
      <Sidebar />
      <div className="chanel-container flex bg-gray-300 dark:bg-gray-700 m-0 w-full overflow-hidden; h-screen"></div>
    </div>
  );
}

export default App;
