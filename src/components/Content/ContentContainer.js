import ChannelBar from "./ChannelBar";
import DownloadBar from "./DownloadBar";

function ContentContainer() {
  return (
    <div className="content-container flex flex-col w-full">
      <DownloadBar />
      <div className="channel-container">
        <ChannelBar />
        <main className="main-content">Main Content</main>
      </div>
    </div>
  );
}

export default ContentContainer;
