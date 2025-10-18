
import "../../tailwind.css";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex justify-center items-start py-16 px-4">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Welcome to our website! We are dedicated to providing the best services and solutions to our customers.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
        <p className="text-gray-700 mb-8 leading-relaxed">
          To deliver high-quality products that bring value and efficiency to your personal or business life.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Team</h3>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We’re a team of passionate professionals with backgrounds in technology, design, and customer support, committed to your satisfaction.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Experienced and dedicated team</li>
          <li>Customer-first approach</li>
          <li>Reliable and innovative solutions</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

