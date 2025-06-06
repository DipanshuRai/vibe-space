import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  console.log(authUser);
  

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h1 className="profile-title">Profile</h1>
            <p className="profile-subtitle">Your profile information</p>
          </div>

          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="avatar-img"
              />
              <label
                htmlFor="avatar-upload"
                className={`avatar-upload-btn ${isUpdatingProfile ? "disabled" : ""}`}
              >
                <Camera className="avatar-icon" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="avatar-note">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="profile-details">
            <div className="profile-item">
              <div className="profile-label">
                <User className="icon-sm" />
                Full Name
              </div>
              <p className="profile-value">{authUser?.fullname}</p>
            </div>

            <div className="profile-item">
              <div className="profile-label">
                <Mail className="icon-sm" />
                Email Address
              </div>
              <p className="profile-value">{authUser?.email}</p>
            </div>
          </div>

          <div className="account-info">
            <h2 className="account-title">Account Information</h2>
            <div className="account-details">
              <div className="account-row">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="account-row">
                <span>Account Status</span>
                <span className="account-status">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
