import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./SignUpPage.css"; // Import external CSS

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullname.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-box">
          <div className="signup-header">
            <div className="signup-logo-group">
              <div className="signup-logo-bg">
                <MessageSquare className="signup-logo-icon" />
              </div>
              <h1 className="signup-title">Create Account</h1>
              <p className="signup-subtitle">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-control">
              <label className="label">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  placeholder="Dipanshu Rai"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  className="input"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input"
                />
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="input-icon" /> : <Eye className="input-icon" />}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="loading-spinner" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="login-redirect">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="link-primary">
                Login in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
