import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-[calc(100vh)] flex-col items-center justify-center">
      <h1>This page doesn't exist.</h1>
      <br />
      <Link to="/">
        <span className="font-bold">Go back to the home page!</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
