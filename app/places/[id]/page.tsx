"use client";

import dummyPlaces from "@/app/lib/dummyData";
import { useRouter } from "next/navigation";
import React from "react";

interface Params {
  params: { id: string };
}

export default function PlaceDetails(props: Params) {
  const router = useRouter();

  // Unwrap the params object for Next.js v14+
  const params = React.use(props.params);
  const place = dummyPlaces.find((p) => p.id === params.id);

  if (!place)
    return <p className="text-center mt-10 text-gray-300">Place not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 mt-8 mb-12">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-96 object-cover rounded-xl shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6">{place.name}</h1>
      <p className="text-gray-300 mt-2">{place.category}</p>

      <div className="mt-4 text-gray-200 space-y-4">
        <p>{place.description}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          finibus risus ac diam pulvinar, vitae volutpat erat congue. Sed
          scelerisque leo a purus consequat, a hendrerit arcu hendrerit.
        </p>
        <p>
          Explore more about {place.name} – its history, facilities, events, and
          community activities. This location is perfect for visitors seeking
          knowledge, leisure, and cultural experiences.
        </p>
        <p>
          Whether you are a student, tourist, or local resident, {place.name}{" "}
          offers educational opportunities, entertainment, and a vibrant social
          environment.
        </p>
      </div>

      <button
        onClick={() => router.back()}
        className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition transform shadow-lg"
      >
        Back to Places
      </button>
    </div>
  );
}
