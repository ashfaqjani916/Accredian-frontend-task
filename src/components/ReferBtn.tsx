import { useState } from 'react';
import Refer from './Refer';

const ReferBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle state on button click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <button onClick={handleModalToggle} data-modal-target="default-modal" data-modal-toggle="default-modal" className="block w-fit text-white bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Refer Now
      </button>
      {isModalOpen && <Refer isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  )
}

export default ReferBtn
