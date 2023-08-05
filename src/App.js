import "./App.css";
import { useDarkMode } from "usehooks-ts";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentContainer from "./components/Content/ContentContainer";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`App flex bg-gray-500 ${isDarkMode ? "dark" : ""}`}>
      <Sidebar />
      <ContentContainer />
    </div>
  );
}

export default App;
