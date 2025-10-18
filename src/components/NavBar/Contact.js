import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex justify-center items-start py-16 px-4">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          If you have any questions or need support, feel free to reach out to us:
        </p>

        <ul className="list-none space-y-4 text-gray-700 mb-8">
          <li>
            <strong>Email:</strong> <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+11234567890" className="text-blue-600 hover:underline">+1 (123) 456-7890</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, Suite 100, New York, NY 10001
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Business Hours</h3>
        <p className="text-gray-700 leading-relaxed">Monday to Friday: 9:00 AM - 5:00 PM (EST)</p>
        <p className="text-gray-700 leading-relaxed">Saturday &amp; Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;

