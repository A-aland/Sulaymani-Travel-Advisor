import Link from "next/link";

interface Place {
  id: string;
  name: string;
  category: string;
  image: string;
}

interface Props {
  places: Place[];
}

export default function PlacesGrid({ places }: Props) {
  if (!places.length) return <p>No places found.</p>;

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {places.map((place) => (
        <Link key={place.id} href={`/places/${place.id}`} className="block">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{place.name}</h2>
              <p className="text-gray-600">{place.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
