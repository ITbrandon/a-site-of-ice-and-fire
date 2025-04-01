import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        A Site of Ice and Fire
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        A Site of Ice and Fire is your ultimate guide to the world of Game of Thrones and A Song of Ice and Fire. Dive into deep lore, character breakdowns, episode analyses, and fan theories as we explore the Seven Kingdoms and beyond. Whether you're a longtime fan or new to Westeros, there's always more to discover!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>
  </section>
  )
}

export default Hero