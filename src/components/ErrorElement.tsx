import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../utils/ScrollToTop'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {

const error = useRouteError() as Error

  return (
    <>
    <ScrollToTop />
    <Header />
    <main className="grid min-h-full place-items-center bg-white text-red-500 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balancesm:text-7xl">
            {error.message}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            Sorry, an Error has occured.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          </div>
        </div>
      </main>
    <Footer />
    </>
  )
}

export default ErrorElement