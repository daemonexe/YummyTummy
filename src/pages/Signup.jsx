import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css"; 

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(
      `Demo signup:\n${firstName} ${lastName}\nEmail: ${email}\nPassword set ✅`
    );
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
        <h2 className="loginCardTitle">Sign up</h2>

        <form className="loginForm" onSubmit={onSubmit}>
          <div className="nameRow">
            <div className="field">
              <label className="loginLabel">First name</label>
              <input
                className="loginInput"
                type="text"
                placeholder="First"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="loginLabel">Last name</label>
              <input
                className="loginInput"
                type="text"
                placeholder="Last"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="loginLabel">Confirm password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="loginBtn" type="submit">
            Create account
          </button>

          <p className="loginAltText">
            Already have an account?{" "}
            <Link className="loginAltLink" to="/">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
