
import { useNavigate,Link } from "react-router-dom";
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

        <button
          className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
          onClick={()=>navigate("/page1")}
        >
          Start Application
        </button>
      </div>
    </div>
  );
};

export default HomePage;
