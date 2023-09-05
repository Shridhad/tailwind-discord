import ChannelBar from "../ChannelBar/ChannelBar";
import DownloadBar from "./DownloadBar";
import MessagesList from "./Messages/MessagesList";
import MessageBar from "./MessageBar/MessageBar";

function ContentContainer() {
  return (
    <div className="content-container flex flex-col w-full">
      <DownloadBar />
      <div className="channel-container">
        <ChannelBar />
        <main className="main-content">
          <MessagesList />
          <MessageBar />
        </main>
      </div>
    </div>
  );
}

export default ContentContainer;
