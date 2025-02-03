import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="flex h-screen flex-col items-center justify-center">
    <p>This page doesn't exist.</p>
    <br />
    <Link to="/" className="font-bold">
      Go back to the home page!
    </Link>
  </div>
);

export default ErrorPage;
