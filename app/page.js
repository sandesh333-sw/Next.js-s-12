import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to Website</h1>
        <p className="text-gray-500">
         This is simple, clean website build with Next.js and Tailwid CSS 
        </p>

        <div className="space-x-5 mt-2.5">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get Started
          </button>

          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
