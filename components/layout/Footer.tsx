export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-gray-700 py-6 mt-20 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Sulaymani Travel Advisor. All rights
        reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-3">
        <a href="#" className="hover:text-purple-400 transition">
          Facebook
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Instagram
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Twitter
        </a>
      </div>
    </footer>
  );
}
