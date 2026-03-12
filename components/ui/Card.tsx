export default function Card({
  id,
  name,
  category,
  image,
  description,
}: {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}) {
  return (
    <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform mb-6 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full md:w-64 h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-gray-300 mt-1">{category}</p>
          <p className="text-gray-200 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
