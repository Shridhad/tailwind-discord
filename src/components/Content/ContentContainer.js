import ChannelBar from "./ChannelBar";
import DownloadBar from "./DownloadBar";

function ContentContainer() {
  return (
    <div className="content-container flex flex-col w-full">
      <DownloadBar />
      <div className="chanel-container flex bg-gray-300 dark:bg-gray-700 m-0 w-full overflow-hidden; h-screen">
        <ChannelBar />
        <main className="main-content">Main Content</main>
      </div>
    </div>
  );
}

export default ContentContainer;
