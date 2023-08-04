import { useDarkMode } from "usehooks-ts";
import SidebarIcon from "./SidebarIcon";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

function ThemeSwitcher() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div className="flex flex-col-reverse flex-grow">
      {isDarkMode ? (
        <SidebarIcon
          icon={<BsSun size="28" />}
          tooltip="Light Mode"
          onClick={toggle}
        />
      ) : (
        <SidebarIcon
          icon={<MdDarkMode size="28" />}
          tooltip="Dark Mode"
          onClick={toggle}
        />
      )}
    </div>
  );
}

export default ThemeSwitcher;
