import { Link } from "react-router-dom";
function NotFound404() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-[10rem] font-bold text-gray-800">404</h1>
        <p className="text-xl mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-outline">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound404;
