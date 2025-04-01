import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getCharacter } from "../server/api";

export function loader({ params }: LoaderFunctionArgs) {
    const id = params.id
    
    if (!id) {
        throw new Response("Character ID is required", { status: 400 });
    }

    return getCharacter(id)
}

const CharacterDetails = () => {

const character = useLoaderData()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-black">{character.fullName}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {character.title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {character.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <img src={character.image} alt={character.fullName}/>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails