export default function HeroSlider() {
  return (
    <div className="relative h-[65vh] flex items-center">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1600"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl text-white space-y-5">
          
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Upgrade Your Skills
          </h1>

          <p className="text-gray-200">
            Discover high-quality courses from expert instructors and grow your career faster.
          </p>

          <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition">
            Explore Courses
          </button>

        </div>
      </div>
    </div>
  );
}