import { MapIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Valar Morghulis. All men must subscribe.</h2>
          <p className="mt-4 text-lg text-white">
          Sign up for our newsletter for the latest theories, lore, and updates!
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white border-2 border-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <MapIcon aria-hidden="true" className="size-6 text-white" />
            </div>
            <dt className="mt-4 text-base font-semibold text-white">Explore the Realm</dt>
            <dd className="mt-2 text-base/7 text-white">
              <nav className='flex gap-4 flex-row sm:flex-col'>
                <Link className='hover:opacity-80' to="/">Home</Link>
                <Link className='hover:opacity-80' to="/about">About</Link>
                <Link className='hover:opacity-80' to="/characters">Characters</Link>
                <Link className='hover:opacity-80' to="/houses">Houses</Link>
              </nav>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
            </div>
            <dt className="mt-4 text-base font-semibold text-white">Disclaimer</dt>
            <dd className="mt-2 text-base/7 text-white">
            This is a fan-made website and is not affiliated with George R.R. Martin, HBO, or any official entities related to A Song of Ice and Fire or Game of Thrones.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  
  </div>
  )
}

export default Footer