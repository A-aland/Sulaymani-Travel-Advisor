// app/page.tsx
import Link from "next/link";
import PlacesGrid from "@/components/sections/PlacesGrid";
import dummyPlaces from "@/app/lib/dummyData";
import {
  FaCoffee,
  FaUniversity,
  FaDumbbell,
  FaTree,
  FaShoppingBag,
} from "react-icons/fa";

const categories = [
  { name: "Cafes", icon: <FaCoffee /> },
  { name: "Gyms", icon: <FaDumbbell /> },
  { name: "Universities", icon: <FaUniversity /> },
  { name: "Parks", icon: <FaTree /> },
  { name: "Malls", icon: <FaShoppingBag /> },
];

export default function Home() {
  const featuredPlaces = dummyPlaces.slice(0, 3); // show only first 3

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-[url('https://i.ibb.co/TMBSnftw/azmar.jpg')] bg-cover bg-center rounded-xl overflow-hidden mt-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold animate-fadeIn drop-shadow-lg">
            Explore Sulaymaniyah
          </h1>
          <p className="mt-4 text-lg md:text-2xl animate-fadeIn delay-200 drop-shadow-md">
            Discover mountains, cafes, parks, universities, and hidden gems in
            your city
          </p>
          <Link
            href="#featured-places"
            className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition transform shadow-lg animate-bounce"
          >
            Explore Places
          </Link>
        </div>
      </section>

      {/* Featured Places */}
      <section id="featured-places" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Featured Places</h2>
        <PlacesGrid places={featuredPlaces} />
        <div className="mt-6 text-center">
          <Link
            href="/places"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition transform shadow-lg"
          >
            View All Places
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore by Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/places?category=${cat.name}`}>
              <div
                className="relative flex flex-col items-center justify-center h-32 rounded-xl cursor-pointer
                              bg-gradient-to-tr from-purple-500 to-pink-500
                              hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                              transition-transform duration-300
                              text-white"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="text-xl font-semibold mt-2">{cat.name}</span>
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black/80 px-2 py-1 rounded">
                  {`Discover the best ${cat.name.toLowerCase()} in Sulaymaniyah`}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
