import "../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../context/FormContext";
import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
const Page1 = () => {
  const { formInfo, setFormInfo } = useFormData();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  }
  // const validate = () => {
  //   const newError = {};
  //   if (!formInfo.firstName || formInfo.firstName.trim() === "") {
  //     newError.firstName = "First name is required";
  //   }
  //   if (!formInfo.lastName || formInfo.lastName.trim() === "") {
  //     newError.lastName = "Last name is required";
  //   }
  //   if (!formInfo.email.includes("@") || !formInfo.email.includes(".")) {
  //     newError.email = "Please enter a valid email";
  //   }
  //   setError(newError);
  //   // Only return true if no errors
  //   return Object.keys(newError).length === 0;
  // };

  const validate = () => {
    const newError = {};

    if (!formInfo.firstName || formInfo.firstName.trim() === "") {
      newError.firstName = "First name is required";
    }

    if (!formInfo.lastName || formInfo.lastName.trim() === "") {
      newError.lastName = "Last name is required";
    }

    if (!formInfo.email || formInfo.email.trim() === "") {
      newError.email = "Email is required";
    } else if (!formInfo.email.includes("@") || !formInfo.email.includes(".")) {
      newError.email = "Please enter a valid email";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  function handleNext() {
    if (!validate()) return;
    navigate("/page2");
  }
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Page 1</h1>
      <h2 className="text-2xl font-semibold mb-4"> Personal Information</h2>

      <div className="w-full max-w-lg bg-white p-8 rounded shadow min-h-[500px]">
        {/* First Name */}

        <TextInput
          name="firstName"
          value={formInfo.firstName}
          onChange={handleChange}
          placeholder="First Name"
          error={error.firstName}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Last Name */}

        <TextInput
          name="lastName"
          value={formInfo.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          error={error.lastName}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
        />

        {/* Email */}

        <TextInput
          name="email"
          value={formInfo.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          error={error.email}
        />

        {/* Phone */}

        <TextInput
          name="phone"
          value={formInfo.phone}
          onChange={handleChange}
          placeholder="Phone (10 digits)"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          error={error.phone}
        />

        {/* Gender */}

        <SelectInput
          name="gender"
          value={formInfo.gender}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          option={["Male", "Female"]}
        />

        {/* Nationality */}

        <TextInput
          name="nationality"
          value={formInfo.nationality}
          onChange={handleChange}
          placeholder="Nationality"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded"
          error={error.nationality}
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page1;
