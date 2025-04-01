import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';

type House = {
    _id: string;
    name: string;
    description: string;
    image: string;
  };
  
  interface HouseNavbarProps {
    houses: House[];
  }
  
const HouseNavbar: React.FC<HouseNavbarProps> = ({ houses }) => {

function shortenName(house: string) {
    const family = house.split(" ")[1]
    return family
}
 
  return (
    <Disclosure as="nav" className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset cursor-pointer">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start flex-wrap">
            <div className="hidden sm:ml-6 sm:block">
              <div>
                {houses.map((house) => (
                  <NavLink
                    key={house._id}
                    to={house._id}
                    className={({isActive}) => isActive ? 'text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                  >
                    {() => shortenName(house.name)}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {houses.map((house) => (
            <NavLink key={house._id} to={house._id}>
            <DisclosureButton
              key={house._id}
              className={'text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}        
            >
                {house.name}
            </DisclosureButton>
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default HouseNavbar