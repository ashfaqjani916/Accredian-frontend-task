

const Menu = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="items-center justify-center  w-full  md:flex  md:order-1" id="navbar-sticky">
        <ul className="flex  p-4 md:px-10 md:py-3 mt-4 text-xl font-light justify-between font-roboto border border-gray-100 rounded-[40px] bg-[#1A73E8] bg-opacity-10 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#1A73E8] md:bg-opacity-10 md:w-2/5 ">
          <li className="flex flex-col">
            <a href="#" className="block py-2 px-3 text-[#1A73E8] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Refer</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Benefits</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">FAQs</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Support</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
