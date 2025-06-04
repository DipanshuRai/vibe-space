import "./MessageSkeleton.css";

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="message-skeleton-container">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className={`chat-bubble-wrapper ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
          <div className="avatar-container">
            <div className="avatar-skeleton-wrapper">
              <div className="skeleton skeleton-avatar" />
            </div>
          </div>

          <div className="header-skeleton">
            <div className="skeleton skeleton-header" />
          </div>

          <div className="bubble-container">
            <div className="skeleton skeleton-message" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
