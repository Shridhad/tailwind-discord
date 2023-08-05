import { ReactComponent as Friends } from "./Friends.svg";
import { ReactComponent as Nitro } from "./Nitro.svg";

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
      <section></section>
    </div>
  );
}
export default ChannelBar;
