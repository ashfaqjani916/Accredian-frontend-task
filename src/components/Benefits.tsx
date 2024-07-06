
import ProgramTable from "./Table"
import { MdOutlineToggleOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ReferBtn from "./ReferBtn";

const Benefits = () => {
  return (
    <div className="w-full flex h-[700px] mt-20 flex-col items-center justify-center">
      <h1 className="text-2xl">What Are The <span className="text-[#1A73E8]">Referral Benfits?</span></h1>
      <div className="flex items-center gap-1 mt-10 w-full justify-end pr-52 text-gray-700"><p>Enrolled</p><MdOutlineToggleOn className="text-3xl" /></div>
      <div className="flex gap-5 ">
        <img src="/table.png" className="w-[250px]" />
        <ProgramTable />
      </div>
      <div className="flex items-center gap-1 mb-5 w-full justify-end pr-48 text-gray-700"><button className="flex items-center gap-1 border-2 rounded-md py-2 px-7" >Show More <IoIosArrowDown className="text-2xl" /></button></div>
      <ReferBtn />
    </div>
  )
}

export default Benefits
