import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import "./ChatHeader.css";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="chat-header-wrapper">
      <div className="chat-header-content">
        <div className="chat-header-user">
          {/* Avatar */}
          <div className="chat-header-avatar">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="chat-header-avatar-img"
            />
          </div>

          {/* User Info */}
          <div>
            <h3 className="chat-header-name">{selectedUser.fullName}</h3>
            <p className="chat-header-status">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button onClick={() => setSelectedUser(null)} className="chat-header-close">
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
