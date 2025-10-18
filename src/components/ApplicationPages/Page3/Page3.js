import "../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../context/FormContext";
import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";

const Page3 = () => {
  const navigate = useNavigate();
  const { formInfo, setFormInfo } = useFormData();
  

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }
  const [error, setError] = useState({});


  function handleNext() {
    const newErrors = {};
    if (!formInfo.educationLevel)
      newErrors.educationLevel = "Please select your education level";
    if (!formInfo.schoolName?.trim())
      newErrors.schoolName = "School name is required";

    const gradYear = Number(formInfo.graduationYear);
    const currentYear = new Date().getFullYear();
    if (!formInfo.graduationYear)
      newErrors.graduationYear = "Graduation year is required";
    else if (isNaN(gradYear) || gradYear < 1900 || gradYear > currentYear) {
      newErrors.graduationYear = `Enter a valid year between 1900 and ${currentYear}`;
    }

    if (!formInfo.certifications?.trim())
      newErrors.certifications = "Please list certifications";
    if (!formInfo.languages?.trim())
      newErrors.languages = "Please list languages";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      navigate("/review");
    }
  }

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Page 3</h1>
      <h2 className="text-2xl font-semibold mb-6">Education & Skills</h2>

      <div className="w-full max-w-lg bg-white p-8 rounded shadow min-h-[550px]">
        {/* Education Level */}

        <SelectInput
          name="educationLevel"
          value={formInfo.educationLevel}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          option={[
            "High School",
            "Associate Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctorate",
          ]}
        />

        {/* School Name */}

        <TextInput
          name="schoolName"
          value={formInfo.schoolName}
          onChange={handleChange}
          placeholder="School Name"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          error={error.schoolName}
        />

        {/* Graduation Year */}

        <TextInput
          type="number"
          name="graduationYear"
          value={formInfo.graduationYear}
          onChange={handleChange}
          placeholder="Graduation Year"
          min="1900"
          max={new Date().getFullYear()}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          error={error.graduationYear}
        />

        {/* Certifications */}
     
          <TextAreaInput
            name="certifications"
            value={formInfo.certifications}
            onChange={handleChange}
            placeholder="Certifications (separate by commas)"
            rows={3}
            className="w-full px-4 py-2 border-2 border-gray-400 rounded resize-none"
            error={error.certifications}
          />
          
     

        {/* Languages */}
       
          <TextAreaInput
            name="languages"
            value={formInfo.languages}
            onChange={handleChange}
            placeholder="Languages (separate by commas) "
            rows={3}
            className="w-full px-4 py-2 border-2 border-gray-400 rounded resize-none"
            error={error.languages}
          />
     

        <div className="flex justify-between">
          {/* Back Button */}
          <button
            onClick={() => navigate("/page2")}
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

export default Page3;
