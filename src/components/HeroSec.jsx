
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSec = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden
      bg-gradient-to-br from-[#090B18] via-[#111329] to-[#1B1240]
      px-5 pb-16 pt-28 text-white sm:px-8 md:px-12 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 -z-10
      h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10
      h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-11rem)]
      max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* Text Content */}
        <div className="relative z-10">

          <span className="inline-flex items-center gap-2 rounded-full
          border border-violet-400/30 bg-violet-400/10
          px-4 py-2 text-sm font-medium text-violet-200">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            LEARN • GROW • SUCCEED
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight
          tracking-tight sm:text-5xl lg:text-6xl">
            Learn New Skills.
            <span className="mt-2 block bg-gradient-to-r
            from-violet-300 via-purple-400 to-orange-300
            bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8
          text-gray-300 sm:text-lg">
            Discover high-quality courses designed to help you
            learn faster, improve your skills, and achieve your goals.
            Your next chapter starts here.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#courses"
              className="group inline-flex items-center justify-center
              gap-3 rounded-xl bg-gradient-to-r from-violet-600
              to-purple-500 px-6 py-4 font-bold text-white
              shadow-lg shadow-violet-600/25 transition duration-300
              hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              Explore Courses
              <FaArrowRight className="transition-transform
              duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#getstarted"
              className="inline-flex items-center justify-center gap-3
              rounded-xl border border-white/15 bg-white/5
              px-6 py-4 font-bold text-white backdrop-blur-sm
              transition duration-300 hover:border-orange-400/60
              hover:bg-orange-400/10 hover:text-orange-300"
            >
              <FaArrowLeft />
              Get Started
            </a>

          </div>

          {/* Small trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6
          gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-orange-400">✦</span>
              Learn at your own pace
            </span>

            <span className="flex items-center gap-2">
              <span className="text-violet-400">✦</span>
              Build real-world skills
            </span>
          </div>

        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-lg">

          {/* Decorative glow behind image */}
          <div className="absolute inset-8 rounded-full
          bg-violet-600/30 blur-[80px]" />

          <div className="relative rounded-3xl border border-white/10
          bg-white/[0.04] p-3 shadow-2xl shadow-violet-950/40
          backdrop-blur-sm">

            <img
              src="/card.jpg"
              alt="Learnify online learning"
              className="relative z-10 w-full rounded-2xl object-contain"
            />

          </div>
 
          



        </div>

      </div>
    </section>
  );
};

export default HeroSec;