import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="flex h-[100vh] flex-col items-center justify-center">
    <h1>This page doesn't exist.</h1>
    <br />
    <Link to="/" className="font-bold">
      Go back to the home page!
    </Link>
  </div>
);

export default ErrorPage;
