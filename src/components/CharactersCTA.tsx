import aryaImage from '../assets/arya.jpg'
import jonImage from '../assets/jonsnow.png'
import cerseiImage from '../assets/cersei.webp'
import tyrionImage from '../assets/tyrion.jpg'
import houndImage from '../assets/hound.jpg'
import theonImage from '../assets/theon.jpg'
import branImage from '../assets/bran.webp'
import { Link } from 'react-router-dom'

const CharactersCTA = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-20">
            Meet the Legends of Westeros, Explore the stories of your favorite characters, from noble lords to cunning schemers.
            </h1>
            <p className="mt-4 text-xl text-gray-500 leading-8">
            Uncover the epic tales, betrayals, and destinies of Game of Thrones characters—from noble warriors to ruthless schemers. Who will you stand behind?
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt="danerys"
                          src={aryaImage}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="jon snow"
                          src={jonImage}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="bran"
                          src={branImage}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="tyrion"
                          src={tyrionImage}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="the hound"
                          src={houndImage}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="cersei"
                          src={cerseiImage}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt="theon"
                          src={theonImage}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="characters"
                className="inline-block rounded-md border-2 border-black bg-black px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-black lg:ml-40"
              >
                View Characters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharactersCTA