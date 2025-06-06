import { useState, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users, ChevronsLeft, ChevronsRight } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // toggle state

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          <Users className="sidebar-icon" />
          {!collapsed && <span className="sidebar-title-text">Contacts</span>}
        </div>

        <div className="online-filter">
          <label className="filter-label">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="filter-text">Show online only</span>
          </label>
          <span className="online-count">({onlineUsers.length - 1} online)</span>
        </div>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed((prev) => !prev)}
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
        </button>
      </div>

      <div className="user-list">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`user-button ${selectedUser?._id === user._id ? "user-selected" : ""}`}
          >
            <div className="user-avatar-wrapper">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="user-avatar"
              />
              {onlineUsers.includes(user._id) && <span className="user-status" />}
            </div>

            {!collapsed && (
              <div className="user-info">
                <div className="user-name">{user.fullname}</div>
                <div className="user-status-text">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            )}
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="no-users">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
