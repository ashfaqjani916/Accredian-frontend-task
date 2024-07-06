import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  return (
    <>


      <nav className=" mt-12 bg-white  w-full z-20 text-sm top-12 start-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">

          <div className="flex items-center space-x-3 rtl:space-x-reverse mr-56">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
            </a>
            <button type="button" className="text-white flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Courses <MdOutlineKeyboardArrowDown className="text-xl" /></button>
          </div>


          <div className=" flex md:flex  md:order-2 space-x-3 ml-10 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white  bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try for Free</button>

            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>


          <div className="items-center justify-right hidden w-full ml-40 md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Refer & Earn</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Resources</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About Us</a>
              </li>

            </ul>
          </div>


        </div>
      </nav>
    </>
  )
}

export default Navbar
