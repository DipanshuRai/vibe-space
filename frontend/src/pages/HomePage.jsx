import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

import "./HomePage.css";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="homepage-container">
      <div className="homepage-inner">
        <div className="homepage-content">
          <div className="homepage-main">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
