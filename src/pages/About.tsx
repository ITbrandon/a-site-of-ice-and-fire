import image1 from '../assets/aboutimage1.jpg'
import image2 from '../assets/aboutimage2.jpg'
import image3 from '../assets/aboutimage3.jpg'
import image4 from '../assets/aboutimage4.jpg'
import Creator from '../components/Creator'
const About = () => {

  return (
    <>
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Story Behind A Site of Ice and Fire</h2>
          <p className="mt-4 text-gray-500">
          A Site of Ice and Fire was created out of a passion for the rich lore, complex characters, and unforgettable moments of Game of Thrones and A Song of Ice and Fire. Whether you’re a longtime reader of George R.R. Martin’s books or a fan of the HBO series, this site is dedicated to exploring the histories, theories, and deep connections that make Westeros such a fascinating world. From House rivalries to forgotten prophecies, our goal is to provide a place where fans can immerse themselves in the stories that continue to captivate us. Welcome to the realm—winter may come and go, but our love for this world endures.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Daenerys"
            src={image1}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Sansa"
            src={image2}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Jaime"
            src={image3}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Stannis"
            src={image4}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
    <Creator />
    </>
  )
}

export default About