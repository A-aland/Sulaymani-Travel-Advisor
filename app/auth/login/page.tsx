import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}
