import { useNavigate, Link } from "react-router-dom";
import "../../tailwind.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-between p-6">
      <h1 className="text-4xl font-semibold text-center text-yellow mt-20">
        Welcome to the Employment Application
      </h1>

      <div className="flex flex-col items-center justify-center flex-grow space-y-4 mt-">
        <p className=" text-xl text-black font-semibold mb-6">
          Please Complete This 3-Step Form To Apply For The Position
        </p>

        <Link to="/page1">
          <button>Start Application</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
