"use client";
import Link from "next/link";
import Card from "../ui/Card";

export default function PlacesList({
  places,
}: {
  places: typeof import("@/app/lib/dummyData").default;
}) {
  return (
    <div className="mt-8 space-y-4">
      {places.map((place) => (
        <Link key={place.id} href={`/places/${place.id}`} className="block">
          <Card
            id={place.id}
            name={place.name}
            category={place.category}
            image={place.image}
            description={place.description}
          />
        </Link>
      ))}
    </div>
  );
}
