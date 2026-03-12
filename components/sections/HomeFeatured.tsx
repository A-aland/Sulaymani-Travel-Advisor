import PlacesGrid from "./PlacesGrid";
import dummyPlaces from "@/app/lib/dummyData";

export default function HomeFeatured() {
  const featured = dummyPlaces.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Places</h2>
      <PlacesGrid places={featured} />
    </section>
  );
}
