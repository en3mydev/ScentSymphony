import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.accesToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Incorrect login data, wrong e-mail/password.");
      }
      console.error(error);
    }
  };
  return (
    <div className="signup-section">
      {errorMessage && <h2>{errorMessage}</h2>}
      <h1>Login</h1>
      <p>Log in to view and track your orders.</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">
          Login
        </button>
      </form>
      <p>
        Need to register? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default SignIn;
