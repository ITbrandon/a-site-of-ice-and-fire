import direwolf from '../assets/direwolf.png'
import creator from '../assets/creator.png'

const Creator = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-white ring-white sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src={direwolf}
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Hi, I’m Brandon Iticka, an aspiring web developer with a deep love for Game of Thrones and A Song of Ice and Fire. I created A Site of Ice and Fire as a passion project—combining my growing skills in web development with my fascination for the rich lore, characters, and world-building of Westeros. Ever since I first watched the show and dove into the books, I’ve been captivated by the intricate history, political intrigue, and larger-than-life legends that make this story so unforgettable. This site is my way of sharing that passion, while also honing my craft as a developer. Whether you’re here to explore theories, revisit key moments, or just celebrate this incredible universe, I hope you find something that sparks your curiosity. Thanks for stopping by—winter may come and go, but the love for this world lives on!”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="creatot"
              src={creator}
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Brandon Iticka</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Creator of A site of Ice and Fire</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Creator