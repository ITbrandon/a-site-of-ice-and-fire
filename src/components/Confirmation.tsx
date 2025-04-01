import { Link } from "react-router-dom"

interface ConfirmationProps {
  title: string;
  message: string;
  link?: boolean; 
}

const Confirmation: React.FC<ConfirmationProps> = ({title, message, link}) => {

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">Success</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {message}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {link ? <Link
              to="/login"
              className="rounded-md border-2 border-black bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Try Logging In
            </Link> : null}
          </div>
        </div>
      </main>
  )
}

export default Confirmation