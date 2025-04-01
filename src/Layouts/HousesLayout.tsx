import { LoaderFunctionArgs, Outlet, redirect } from "react-router-dom"
import HouseNavbar from "../components/HouseNavbar"
import { useLoaderData } from "react-router-dom"
import { getHouses, getCharacters } from "../server/api"

export async function loader({request}: LoaderFunctionArgs) {
    try {
      const houses = await getHouses()
      const characters = await getCharacters()
      return {houses, characters}
    }
    catch(err)
    {
      const pathname = new URL(request.url).pathname
      return redirect(`/login?redirectTo=${pathname}`)
    }
}

const HousesLayout = () => {

type House = {
    _id: string,
    name: string,
    description: string,
    image: string,
}

type Character = {
    _id: string,
    description: string,
    family: string,
    firstName: string,
    fullName: string,
    image: string,
    lastName: string,
    title: string
}
      
const { houses, characters } = useLoaderData() as { houses: House[], characters: Character[] }

  return (
    <>
    <HouseNavbar houses={houses} />
    <Outlet context={characters}/>
    </>
  )
}

export default HousesLayout