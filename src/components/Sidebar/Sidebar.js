import {
  BsPlus,
  BsFillLightningFill,
  BsDownload,
  BsDiscord,
} from "react-icons/bs";
import SidebarIcon from "./SidebarIcon";
import Divider from "./Divider";
import ThemeSwitcher from "./ThemeSwitcher";

function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-100 dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon
        icon={<BsDiscord size="28" />}
        tooltip="Direct Messages"
        active={true}
      />
      <Divider />
      <SidebarIcon icon={<BsPlus size="32" />} tooltip="Add a Server" />
      <SidebarIcon
        icon={<BsFillLightningFill size="20" />}
        tooltip="Explore Discoverable Servers"
      />
      <Divider />
      <SidebarIcon icon={<BsDownload size="20" />} tooltip="Download Apps" />

      <ThemeSwitcher />
    </div>
  );
}

export default Sidebar;
