import React from "react";
import { useState } from "react";
import { useFormData } from "../../../context/FormContext";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const { formInfo, setFormInfo } = useFormData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      // Clear localStorage
      localStorage.removeItem("formInfo");
      // Reset formInfo state
      setFormInfo({});
      // Navigate to confirmation page
      setLoading(false);
      navigate("/confirm");
    }, 3000);
  }
  return (
    <div className="min-h-screen bg-gray-300 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Review Your Application</h1>

      {/* Personal Info Section */}
      <div className="bg-white w-full max-w-2xl p-6 mb-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button
            onClick={() => navigate("/page1")}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>
        <ul>
          <li>
            <strong>First Name:</strong> {formInfo.firstName || "Not provided"}
          </li>
          <li>
            <strong>Last Name:</strong> {formInfo.lastName || "Not provided"}
          </li>
          <li>
            <strong>Email:</strong> {formInfo.email || "Not provided"}
          </li>
          <li>
            <strong>Phone:</strong> {formInfo.phone || "Not provided"}
          </li>
          <li>
            <strong>Gender:</strong> {formInfo.gender || "Not provided"}
          </li>
          <li>
            <strong>Nationality:</strong>{" "}
            {formInfo.nationality || "Not provided"}
          </li>
        </ul>
      </div>

      {/* Employment Info Section */}
      <div className="bg-white w-full max-w-2xl p-6 mb-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Employment History</h2>
          <button
            onClick={() => navigate("/page2")}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>
        <ul>
          <li>
            <strong>Recent Job Title:</strong>{" "}
            {formInfo.recentJobTitle || "Not provided"}
          </li>
          <li>
            <strong>Company Name:</strong>{" "}
            {formInfo.companyName || "Not provided"}
          </li>
          <li>
            <strong>Employment Start:</strong>{" "}
            {formInfo.employmentStart || "Not provided"}
          </li>
          <li>
            <strong>Employment End:</strong>{" "}
            {formInfo.employmentEnd || "Not provided"}
          </li>
          <li>
            <strong>Reason for Leaving:</strong>{" "}
            {formInfo.reasonForLeaving || "Not provided"}
          </li>
          <li>
            <strong>Previous Job Title:</strong>{" "}
            {formInfo.previousJobTitle || "Not provided"}
          </li>
        </ul>
      </div>

      {/* Education Info Section */}
      <div className="bg-white w-full max-w-2xl p-6 mb-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Education & Skills</h2>
          <button
            onClick={() => navigate("/page3")}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>
        <ul>
          <li>
            <strong>Education Level:</strong>{" "}
            {formInfo.educationLevel || "Not provided"}
          </li>
          <li>
            <strong>School Name:</strong>{" "}
            {formInfo.schoolName || "Not provided"}
          </li>
          <li>
            <strong>Graduation Year:</strong>{" "}
            {formInfo.graduationYear || "Not provided"}
          </li>
          <li>
            <strong>Certifications:</strong>{" "}
            {formInfo.certifications || "Not provided"}
          </li>
          <li>
            <strong>Languages:</strong> {formInfo.languages || "Not provided"}
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/page3")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          disabled={loading}
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Review;
