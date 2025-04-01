import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCharacters } from "../server/api";

export function loader() {
  return getCharacters()
};

const Characters = () => {

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

const [filter, setFilter] = useState<string>(localStorage.getItem('filter') || "")

const characters = useLoaderData() as Character[]
const displayedCharacters = filter ? characters.filter(char => char.fullName.toLowerCase().trim().includes(filter.toLowerCase().trim())) : characters

function filterCharacters(event: React.ChangeEvent<HTMLInputElement>) {
  setFilter(event.target.value)
  localStorage.setItem('filter', event.target.value)
}

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Characters</h2>
        <div className="mb-2">
        <input type="text" placeholder="Look up a character" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" onChange={filterCharacters}/>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayedCharacters.map((char: Character) => (
            <Link key={char._id} to={`/characters/${char._id}`} className="group">
              <img
                alt={char.fullName}
                src={char.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{char.family}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{char.fullName}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Characters