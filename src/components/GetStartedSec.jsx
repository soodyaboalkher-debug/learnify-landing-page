import {
FaArrowRight,
FaRocket,
FaCheckCircle,
} from "react-icons/fa";

const GetStartedSec = () => {
return ( <section
   id="getstarted"
   className="relative isolate scroll-mt-16 overflow-hidden
   bg-[#090B18] px-5 py-24 text-white sm:px-8 md:py-32"
 >
{/* Background Glow */} <div
     className="pointer-events-none absolute inset-0 -z-10
     bg-gradient-to-br from-violet-950/50
     via-[#090B18] to-orange-950/20"
   />


  <div
    className="pointer-events-none absolute -left-20 top-10
    -z-10 h-72 w-72 rounded-full bg-violet-600/20
    blur-[110px]"
  />

  <div
    className="pointer-events-none absolute -right-20
    bottom-0 -z-10 h-72 w-72 rounded-full
    bg-orange-500/10 blur-[110px]"
  />

  {/* Main Content */}
  <div
    className="mx-auto max-w-5xl rounded-3xl
    border border-white/10 bg-white/[0.04]
    px-6 py-12 text-center shadow-2xl
    shadow-violet-950/20 backdrop-blur-sm
    sm:px-12 sm:py-16 lg:px-20"
  >
    {/* Icon */}
    <div
      className="mx-auto flex h-16 w-16 items-center
      justify-center rounded-2xl border
      border-violet-400/20 bg-violet-500/10
      text-3xl text-violet-300"
    >
      <FaRocket />
    </div>

    {/* Heading */}
    <h2
      className="mx-auto mt-7 max-w-3xl
      text-3xl font-extrabold leading-tight
      tracking-tight sm:text-4xl lg:text-5xl"
    >
      Your Future Starts{" "}
      <span
        className="bg-gradient-to-r from-violet-300
        via-purple-400 to-orange-300
        bg-clip-text text-transparent"
      >
        Today.
      </span>
    </h2>

    {/* Description */}
    <p
      className="mx-auto mt-5 max-w-2xl
      text-base leading-8 text-gray-400 sm:text-lg"
    >
      Every expert was once a beginner.
      Start learning new skills, explore your interests,
      and take the first step toward your goals.
    </p>

    {/* Benefits */}
    <div
      className="mt-8 flex flex-wrap justify-center
      gap-x-6 gap-y-4 text-sm text-gray-300"
    >
      <span className="flex items-center gap-2">
        <FaCheckCircle className="text-violet-400" />
        Learn at your own pace
      </span>

      <span className="flex items-center gap-2">
        <FaCheckCircle className="text-orange-400" />
        Explore new skills
      </span>

      <span className="flex items-center gap-2">
        <FaCheckCircle className="text-violet-400" />
        Build your future
      </span>
    </div>

    {/* Buttons */}
    <div
      className="mt-10 flex flex-col
      justify-center gap-4 sm:flex-row"
    >
      <a
        href="#courses"
        className="group inline-flex items-center
        justify-center gap-3 rounded-xl
        bg-gradient-to-r from-violet-600 to-purple-500
        px-7 py-4 font-bold text-white
        shadow-lg shadow-violet-600/20
        transition duration-300
        hover:-translate-y-1
        hover:shadow-violet-500/40"
      >
        Explore Courses

        <FaArrowRight
          className="transition-transform duration-300
          group-hover:translate-x-1"
        />
      </a>

      <a
        href="#home"
        className="inline-flex items-center
        justify-center rounded-xl border
        border-white/15 bg-white/5 px-7 py-4
        font-semibold text-gray-200
        transition duration-300
        hover:border-orange-400/40
        hover:bg-orange-400/10
        hover:text-orange-300"
      >
        Back to Home
      </a>
    </div>

    {/* Bottom Text */}
    <p className="mt-8 text-sm text-gray-500">
      Learn something new. Become someone new.
    </p>
  </div>
</section>

);
};

export default GetStartedSec;
