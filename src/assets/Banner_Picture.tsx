import React from 'react'

import banner from './banner_pic-removebg-preview.png'

const Banner_Picture: React.FC = () => {
  return (
    <>
      <img src={banner} alt="Banner Picture" className="w-[814px] h-[725px]  left-[504px] absolute" />
    </>
  )
}

export default Banner_Picture
