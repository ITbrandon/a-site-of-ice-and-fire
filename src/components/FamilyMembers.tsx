import { Link } from "react-router-dom";

type Character = {
    _id: string;
    description: string;
    family: string;
    firstName: string;
    fullName: string;
    image: string;
    lastName: string;
    title: string;
  };
  
   type FamilyMembersProps = {
    members: Character[];
  };

  const FamilyMembers: React.FC<FamilyMembersProps> = ({ members }) => {
    
  return (
    <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">House Members</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {members.map((member) => (
            <div key={member.fullName} className="group relative">
              <img
                alt={member.fullName}
                src={member.image}
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-4 text-sm text-gray-500 mb-6">
                <Link to={`/characters/${member._id}`}>
                  <span className="absolute inset-0" />
                  {member.fullName}
                </Link>
              </h3>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default FamilyMembers