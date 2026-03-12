import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none h-32"
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
