import { MdClose } from "react-icons/md";
import { AiFillWindows, AiFillAndroid, AiFillApple } from "react-icons/ai";

function DownloadBar() {
  return (
    <div className="relative flex items-center justify-center text-sm w-full h-9  text-white bg-green-800 shadow-md">
      <span className="flex items-center absolute top-0 right-0 w-10 h-full">
        <MdClose size={24} />
      </span>
      Want to take full advantage of Discord with better performance, in-game
      overlay, and more? Get the desktop app!
      <span className="flex items-center justify-center gap-2 ml-2">
        <AiFillApple size={20} />
        <AiFillAndroid size={20} />
        <AiFillWindows size={20} />
        <button className="pl-3 pr-3 py-0 ml-2 border border-white text-white hover:bg-white hover:text-green-600 rounded-sm">
          Download
        </button>
      </span>
    </div>
  );
}

export default DownloadBar;
