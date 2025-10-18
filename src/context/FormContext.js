
import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formInfo, setFormInfo] = useState(() => {
    const saved = localStorage.getItem("formInfo");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("formInfo", JSON.stringify(formInfo));
  }, [formInfo]);

  return (
    <FormContext.Provider value={{ formInfo, setFormInfo }}>
      {children}
    </FormContext.Provider>
  );
};


