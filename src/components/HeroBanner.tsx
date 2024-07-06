import ReferBtn from "./ReferBtn"


const HeroBanner = () => {
  return (
    <div className="w-3/4 h-[480px] bg-[#EEF5FF] font-roboto rounded-3xl flex justify-between shadow-2xl my-10">
      <div className=" w-1/2 flex flex-col pt-14 pl-16 ">
        <p className="font-semibold text-[68px] leading-[63px] text-gray-900">Let's Learn <br />& Earn</p>
        <p className="font-medium text-[30px] py-10 text-gray-700">Get a chance to win <br />up-to <span className="text-[#1A73E8]">Rs. 15,000</span> </p>
        <ReferBtn />
      </div>
      <img src="/heroimg.svg" className="h-[500px]" />
    </div>
  )
}

export default HeroBanner
