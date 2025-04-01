import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { clearToken } from '../redux/tokenSlice'
import logo from '../assets/direwolf.png'

const Header = () => {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const navigation = [
    { name: 'Characters', href: '/characters' },
    { name: 'Houses', href: '/houses/67ddbbde4abf8fa1a53c369d' },
    { name: 'About', href: '/about' },
  ]

const navigate = useNavigate()
const dispatch = useDispatch()

const token = useSelector((state: RootState) => state.token.token);

function logOut() {
  dispatch(clearToken())
  setMobileMenuOpen(false)
  navigate("/")
}

  return (
    <header className="inset-x-0 top-0 relative z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">A Site of Ice and Fire</span>
              <img
                alt="direwolf"
                src={logo}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={({isActive}) => isActive ? "text-sm/6 font-semibold text-gray-900 underline" : "text-sm/6 font-semibold text-gray-900"}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!token ? <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link> : <span onClick={logOut} className="text-sm/6 font-semibold text-gray-900 cursor-pointer">Log Out <span aria-hidden="true">&rarr;</span></span>}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
                <span className="sr-only">A Site of Ice and Fire</span>
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {!token ? <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link> : <span onClick={logOut} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer">Log Out</span>}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}

export default Header