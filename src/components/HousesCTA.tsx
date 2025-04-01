import houseStark from '../assets/houseStark.webp'
import winterfell from '../assets/winterfell.png'
import { Link } from 'react-router-dom'

const HousesCTA = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div style={{ backgroundImage: `url(${winterfell})` }} className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          Unravel the Legacy, Honor the Houses.
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
          Explore the noble houses of Westeros, their histories, alliances, and betrayals. Discover the power, pride, and traditions that shaped the world of Game of Thrones.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              to="houses/67ddbbde4abf8fa1a53c369d"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View All Houses in Westeros
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            alt="App screenshot"
            src={houseStark}
            width={1824}
            height={1080}
            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HousesCTA