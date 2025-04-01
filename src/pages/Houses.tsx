import { LoaderFunctionArgs, useLoaderData, useOutletContext } from "react-router-dom";
import { getHouse } from "../server/api";
import FamilyMembers from "../components/FamilyMembers";

export function loader({ params }: LoaderFunctionArgs) {
    const id = params.id
    
    if (!id) {
        throw new Response("House ID is required", { status: 400 });
    }
    
    return getHouse(id)
}

const Houses = () => {

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

const house = useLoaderData()
const characters: Character[] = useOutletContext()
const familyMembers: Character[] = characters.filter(char => char.family.includes(house.name));

  return (
  <>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {house.name}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {house.description}
              </p>
            </div>
          </div>
          <img
            alt={house.name}
            src={house.image}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    <FamilyMembers members={familyMembers}/>
  </>
  )
}

export default Houses