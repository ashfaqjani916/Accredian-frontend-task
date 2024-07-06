

const FAQ = () => {
  return (<>
    <div className="w-full flex  justify-center">
      <div className="flex flex-col w-3/4 h-[500px] justify-center items-center ">
        <h1 className="text-2xl">Frequently Asked <span className="text-[#1A73E8]">Questions</span></h1>
        <div className="flex  items-center justify-center ">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-5 w-full justify-end pr-24 text-gray-700"><button className="flex items-center text-sm w-44 text-[#1A73E8] gap-1 shadow-lg rounded-md py-4  justify-center" >Eligibility</button></div>
            <div className="flex items-center gap-1 mb-5 w-full justify-end pr-24 text-gray-700"><button className="flex items-center text-sm w-44 gap-1 border-2 rounded-md py-4  justify-center" >How to Use</button></div>
            <div className="flex items-center gap-1 mb-5 w-full justify-end pr-24 text-gray-700"><button className="flex items-center text-sm w-44 gap-1 border-2 rounded-md py-4 justify-center" >Terms & Conditions </button></div>
          </div>
          <div>
            <p className="text-[#1A73E8] mb-3 ">Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
            <p className="font-light mb-3 ">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.</p>
            <p className="">What is the minimum system configuration required?</p>
          </div>
        </div>
      </div>
    </div>
    <img src="/banner.png" className="w-4/5 ml-44 mb-20" />
  </>
  );
};

export default FAQ;
