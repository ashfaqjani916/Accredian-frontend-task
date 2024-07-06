import ReferBtn from "./ReferBtn"
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";


const HowtoRefer = () => {
  return (
    <div className="mt-3 h-[600px]  w-full p-20 bg-[#EEF5FF] flex flex-col items-center justify-center ">
      <h1 className="text-2xl">How Do I <span className="text-[#1A73E8]">Refer?</span></h1>
      <div className="relative">
        <img src="/image.png" className="z-10   " />
        <div className="z-50 absolute w-full pl-44 pt-20 top-20 left-50">
          <ul className="flex pl-5 gap-40">
            <li className=" flex flex-col gap-2 items-center justify-center">
              <MdPersonAddAlt1 className="text-[#1A73E8] text-[60px]" />
              <p className=" justify-center flex flex-col items-center">
                <span> Submit referrals easily via</span><span> our website’s referral</span>  section.
              </p>
            </li>
            <li className="  flex flex-col gap-2 items-center justify-center">
              <FaClipboardList className="text-[#1A73E8] text-[60px]" />
              <p className=" justify-center flex flex-col items-center">
                <span>Earn rewards once your</span><span> referral joins an Accredian</span> program.
              </p>
            </li>
            <li className=" ml-8 flex gap-2 flex-col items-center justify-center">
              <GiWallet className="text-[#1A73E8] text-[60px]" />
              <p className=" justify-center flex flex-col items-center">
                <span> Both parties receive a</span><span> bonus 30 days after</span> program enrollment.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <ReferBtn />
    </div>
  )
}

export default HowtoRefer
