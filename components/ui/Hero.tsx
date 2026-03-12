export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center bg-[url('https://i.ibb.co/TMBSnftw/azmar.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-white max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Explore Sulaymaniyah
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
          Discover mountains, cafes, parks, and hidden gems in your city.
        </p>
        <a
          href="/places"
          className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition transform shadow-lg"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
