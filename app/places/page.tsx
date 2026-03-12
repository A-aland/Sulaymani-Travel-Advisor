"use client";
import { useSearchParams, useRouter } from "next/navigation";
import PlacesList from "@/components/sections/PlacesList";
import dummyPlaces from "@/app/lib/dummyData";

export default function Places() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category"); // e.g., "Gyms"

  const filteredPlaces = category
    ? dummyPlaces.filter((p) => p.category === category)
    : dummyPlaces;

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 mb-12">
      <h1 className="text-4xl font-bold mb-6">
        {category ? `${category}` : "All Places"}
      </h1>

      {filteredPlaces.length > 0 ? (
        <PlacesList places={filteredPlaces} />
      ) : (
        <p className="text-gray-300 text-lg">
          No places found in this category.
        </p>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition transform shadow-lg"
        >
          Return to Explore by Categories
        </button>
      </div>
    </div>
  );
}
