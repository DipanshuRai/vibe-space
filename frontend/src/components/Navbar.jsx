import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-left">
            <Link to="/" className="navbar-brand">
              <div className="navbar-logo">
                <img src="/logo.png" alt="Vibe Space Logo"/>
              </div>
              <h1 className="navbar-title">Vibe Space</h1>
            </Link>
          </div>

          <div className="navbar-right">
            <Link to="/settings" className="navbar-btn">
              <Settings className="navbar-icon" />
              <span className="navbar-btn-label">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to="/profile" className="navbar-btn">
                  <User className="navbar-icon" />
                  <span className="navbar-btn-label">Profile</span>
                </Link>

                <button className="navbar-btn logout-btn" onClick={logout}>
                  <LogOut className="navbar-icon" />
                  <span className="navbar-btn-label">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
