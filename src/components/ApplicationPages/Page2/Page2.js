import "../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../context/FormContext";
import { useState } from "react";
import TextInput from "./TextInput";

const Page2 = () => {
  const navigate = useNavigate();
  const { formInfo, setFormInfo } = useFormData();
  const [error, SetError] = useState({});

  function handleChange(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleNext() {
    const required = [
      "recentJobTitle",
      "companyName",
      "employmentStart",
      "employmentEnd",
      "reasonForLeaving",
      "previousJobTitle",
    ];

    const newError = {};
    required.forEach((element) => {
      if (!formInfo[element] || formInfo[element].trim() === "") {
        newError[element] = "This field is required";
      }
    });

    if (Object.keys(newError).length > 0) {
      SetError(newError);
    } else {
      SetError({});
      navigate("/page3");
    }
  }

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Page 2</h1>
      <h2 className="text-2xl font-semibold mb-4">Employment History</h2>

      <div className="w-full max-w-lg bg-white p-8 rounded shadow min-h-[600px]">
        {/* Recent Job Title */}

        <TextInput
          name="recentJobTitle"
          value={formInfo.recentJobTitle}
          onChange={handleChange}
          placeholder="Recent Job Title"
          error={error.recentJobTitle}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Company Name */}

        <TextInput
          name="companyName"
          value={formInfo.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          error={error.companyName}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Employment Start */}

        <TextInput
          name="employmentStart"
          value={formInfo.employmentStart}
          onChange={handleChange}
          placeholder="Employment Start"
          error={error.employmentStart}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Employment End */}

        <TextInput
          name="employmentEnd"
          value={formInfo.employmentEnd}
          onChange={handleChange}
          placeholder="Employment End"
          error={error.employmentEnd}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Reason for Leaving */}

        <TextInput
          name="reasonForLeaving"
          value={formInfo.reasonForLeaving}
          onChange={handleChange}
          placeholder="Reason for Leaving"
          error={error.reasonForLeaving}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Previous Job Title */}

        <TextInput
          name="previousJobTitle"
          value={formInfo.previousJobTitle}
          onChange={handleChange}
          placeholder="Previous Job Title"
          error={error.previousJobTitle}
           className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        <div className="flex justify-between">
          {/* Back Button */}
          <button
            onClick={() => navigate("/page1")}
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Back
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
