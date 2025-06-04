import { Users } from "lucide-react";
import "./SidebarSkeleton.css";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="sidebar-skeleton">
      {/* Header */}
      <div className="sidebar-skeleton-header">
        <div className="sidebar-skeleton-title">
          <Users className="icon" />
          <span className="title-text">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="sidebar-skeleton-contacts">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="skeleton-contact">
            <div className="avatar-wrapper">
              <div className="skeleton skeleton-avatar" />
            </div>

            <div className="contact-info">
              <div className="skeleton skeleton-name" />
              <div className="skeleton skeleton-status" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
