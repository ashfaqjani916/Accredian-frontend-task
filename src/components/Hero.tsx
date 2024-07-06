import HeroBanner from "./HeroBanner"
import Menu from "./Menu"


const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center w-full border border-green-900 " >
      <Menu />
      <HeroBanner />
    </div>
  )
}

export default Hero
