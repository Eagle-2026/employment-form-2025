import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";

const ReviewConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Application Submitted!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for submitting your application! We have successfully
          received it and our team will review it shortly. You can expect to
          hear from us soon with the next steps.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ReviewConfirmation;
