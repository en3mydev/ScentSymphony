import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfoundpage">
      <h1>Error 404</h1>
      <h2>Sorry, the page you were looking for was not found.</h2>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default NotFound;
