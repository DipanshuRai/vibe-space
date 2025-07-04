import { MessageSquare } from "lucide-react";
import "./NoChatSelected.css";

const NoChatSelected = () => {
  return (
    <div className="nochat-container">
      <div className="nochat-content">
        <div className="nochat-icon-wrapper">
          <div className="nochat-icon-bg">
            <MessageSquare className="nochat-icon" />
          </div>
        </div>

        <h2 className="nochat-title">Welcome to Vibe Space!</h2>
        <p className="nochat-subtitle">
          Select a conversation to start chatting . . .
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
