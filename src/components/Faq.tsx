

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked <span className="text-blue-600">Questions</span></h2>
      <div className="flex">
        <div className="w-1/3">
          <button className="w-full p-4 text-left bg-blue-100 text-blue-600 border border-gray-300">Eligibility</button>
          <button className="w-full p-4 text-left bg-gray-100 text-gray-600 border border-gray-300">How To Use?</button>
          <button className="w-full p-4 text-left bg-gray-100 text-gray-600 border border-gray-300">Terms & Conditions</button>
        </div>
        <div className="w-2/3 p-4">
          <div className="mb-4">
            <h3 className="text-blue-600 cursor-pointer">
              Do I need to have prior Product Management and Project Management experience to enroll in the program?
            </h3>
            <p className="mt-2 text-gray-600">
              No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
            </p>
          </div>
          <div>
            <h3 className="text-gray-800 cursor-pointer">
              What is the minimum system configuration required?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
