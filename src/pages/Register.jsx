import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(auth.currentUser);
      const user = userCredential.user;
      localStorage.setItem("token", user.accesToken);
      localStorage.setItem("user", JSON.stringify(user));
      setSuccesMessage(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use.");
      }
      console.error(error);
    }
  };
  return (
    <div className="signup-section">
      {succesMessage && <h3>Account created successfully!</h3>}
      {errorMessage && <h2>{errorMessage}</h2>}
      <h1>Register</h1>
      <p>Register to be able to view your order history.</p>
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
          Register
        </button>
      </form>
      <p>
        Do you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
