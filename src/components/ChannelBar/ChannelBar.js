import { ReactComponent as Friends } from "./Friends.svg";
import { ReactComponent as Nitro } from "./Nitro.svg";
import { BiPlus } from "react-icons/bi";

function ChannelBar() {
  return (
    <div className="channel-bar">
      <div className="search-bar">
        <button className="search-input">Find or start a conversation</button>
      </div>
      <ul className="flex flex-col justify-center gap-1 mt-2">
        <li className="channel-ad active">
          <Friends width="24px" height="24px" /> Friends
        </li>
        <li className="channel-ad">
          <Nitro width="24px" height="24px" /> Nitro
        </li>
      </ul>
      <section className="direct-messages">
        <h2 className="heading">
          <span>Direct Messages</span>
          <BiPlus size={16} />
        </h2>
        <ul className="messages">
          <li className="message"></li>
        </ul>
      </section>
    </div>
  );
}
export default ChannelBar;
