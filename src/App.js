import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/ApplicationPages/HomePage";
import Page1 from "./components/ApplicationPages/Page1/Page1";
import Page2 from "./components/ApplicationPages/Page2/Page2";
import Page3 from "./components/ApplicationPages/Page3/Page3";
import Review from "./components/ApplicationPages/Review/Review";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/NavBar/About";
import Contact from "./components/NavBar/Contact";
import { FormProvider } from "./context/FormContext";
import ReviewConfirmation from "./components/ApplicationPages/Review/ReviewConfirmation";
function App() {
  return (
    <FormProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="review" element={<Review />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirm" element={<ReviewConfirmation />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;




