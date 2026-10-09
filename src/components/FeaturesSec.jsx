
import {
  FaLaptopCode,
  FaGraduationCap,
  FaClock,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Practical Learning",
    description:
      "Learn by doing with practical lessons and projects that help you build real-world skills.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "hover:border-violet-400/40",
  },
  {
    id: 2,
    icon: FaGraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from structured courses designed to make complex topics easier to understand.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
    border: "hover:border-orange-400/40",
  },
  {
    id: 3,
    icon: FaClock,
    title: "Learn at Your Pace",
    description:
      "Study whenever it suits you and make progress according to your own schedule.",
    color: "text-sky-300",
    bg: "bg-sky-400/10",
    border: "hover:border-sky-400/40",
  },
  {
    id: 4,
    icon: FaCertificate,
    title: "Track Your Progress",
    description:
      "Stay motivated, follow your learning journey, and keep moving toward your goals.",
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-400/10",
    border: "hover:border-fuchsia-400/40",
  },
];

const FeaturesSec = () => {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden
      scroll-mt-16 bg-[#090B18] px-5 py-20
      text-white sm:px-8 md:py-24 lg:px-12"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-32 top-20
        -z-10 h-80 w-80 rounded-full
        bg-violet-600/10 blur-[110px]"
      />

      <div
        className="pointer-events-none absolute -right-32
        bottom-0 -z-10 h-80 w-80 rounded-full
        bg-orange-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span
            className="inline-flex items-center rounded-full
            border border-violet-400/20 bg-violet-400/10
            px-4 py-2 text-sm font-semibold
            tracking-wide text-violet-300"
          >
            WHY CHOOSE LEARNIFY?
          </span>

          <h2
            className="mt-5 text-3xl font-extrabold
            tracking-tight sm:text-4xl md:text-5xl"
          >
            Everything You Need to{" "}
            <span
              className="bg-gradient-to-r from-violet-300
              via-purple-400 to-orange-300 bg-clip-text
              text-transparent"
            >
              Grow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl
          text-base leading-8 text-gray-400 sm:text-lg">
            More than courses. A better way to learn,
            develop your skills, and prepare for your future.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5
        sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`group relative overflow-hidden
                rounded-2xl border border-white/10
                bg-white/[0.03] p-6
                transition-all duration-300
                hover:-translate-y-2 hover:bg-white/[0.06]
                ${feature.border}`}
              >
                {/* Decorative circle */}
                <div
                  className={`absolute -right-8 -top-8
                  h-24 w-24 rounded-full opacity-0
                  blur-2xl transition-opacity duration-300
                  group-hover:opacity-100 ${feature.bg}`}
                />

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14
                  items-center justify-center rounded-2xl
                  ${feature.bg} ${feature.color}
                  transition-transform duration-300
                  group-hover:scale-110`}
                >
                  <Icon size={25} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold
                text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm
                leading-7 text-gray-400">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div
                  className={`mt-5 h-1 w-10 rounded-full
                  transition-all duration-300
                  group-hover:w-20 ${feature.bg}`}
                />
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#getstarted"
            className="group inline-flex items-center
            justify-center gap-3 rounded-xl
            bg-gradient-to-r from-violet-600 to-purple-500
            px-7 py-4 font-bold text-white
            shadow-lg shadow-violet-600/20
            transition duration-300
            hover:-translate-y-1 hover:shadow-violet-500/40"
          >
            Start Your Journey
            <FaArrowRight
              className="transition-transform duration-300
              group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSec;

