import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    alert(`Demo login:\nEmail: ${email}\nPassword: ${"*".repeat(password.length)}`);
  }

  return (
    <div className="loginPage">
      <div className="loginWallpaperOverlay" />

      <div className="loginHeader">
        <div className="loginHeaderLogo">🍲</div>
        <div>
          <h1 className="loginHeaderTitle">Yummy Tummy</h1>
          <p className="loginHeaderMotto">Any Yummers dude?</p>
        </div>
      </div>

      <div className="loginCard">
        <h2 className="loginCardTitle">Log in</h2>

        <form className="loginForm" onSubmit={onSubmit}>
          <label className="loginLabel">Email</label>
          <input
            className="loginInput"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="loginLabel">Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="loginRow">
            <label className="loginCheckbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="loginLinkBtn"
              onClick={() => alert("Demo: add reset later")}
            >
              Forgot password?
            </button>
          </div>

          <button className="loginBtn" type="submit">
            Login
          </button>

          {/* NEW */}
          <p className="loginAltText">
            Don&apos;t have an account?{" "}
            <Link className="loginAltLink" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
