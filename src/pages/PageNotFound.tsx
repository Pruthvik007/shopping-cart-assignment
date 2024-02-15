import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-medium">404</h1>
        <p className="text-xl font-medium m-6">
          Sorry, The Page You're looking for Cannot Be Found.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
