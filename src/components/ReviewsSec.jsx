
import {
  FaStar,
  FaQuoteRight,
  FaGraduationCap,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Frontend Development Student",
    initials: "AM",
    rating: 5,
    color: "from-violet-500 to-purple-700",
    review:
      "The courses are well organized and easy to follow. I can learn new concepts step by step and practice what I learn.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Design Student",
    initials: "SJ",
    rating: 5,
    color: "from-orange-400 to-pink-600",
    review:
      "I love the clean learning experience. The lessons help me stay focused and make learning feel much more enjoyable.",
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Web Development Student",
    initials: "DS",
    rating: 5,
    color: "from-sky-400 to-blue-700",
    review:
      "A great way to organize my learning journey. I enjoy exploring different topics and building my skills at my own pace.",
  },
];

const ReviewsSec = () => {
  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden
      scroll-mt-16 bg-gradient-to-b
      from-[#111329] to-[#090B18]
      px-5 py-20 text-white sm:px-8 md:py-24 lg:px-12"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-32
        top-10 -z-10 h-80 w-80 rounded-full
        bg-violet-600/10 blur-[110px]"
      />

      <div
        className="pointer-events-none absolute -left-32
        bottom-0 -z-10 h-80 w-80 rounded-full
        bg-orange-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span
            className="inline-flex items-center gap-2
            rounded-full border border-violet-400/20
            bg-violet-400/10 px-4 py-2
            text-sm font-semibold text-violet-300"
          >
            <FaGraduationCap />
            STUDENT EXPERIENCES
          </span>

          <h2
            className="mt-5 text-3xl font-extrabold
            tracking-tight sm:text-4xl md:text-5xl"
          >
            What Our Learners{" "}
            <span
              className="bg-gradient-to-r from-violet-300
              via-purple-400 to-orange-300
              bg-clip-text text-transparent"
            >
              Say
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl
          text-base leading-8 text-gray-400 sm:text-lg">
            Every learning journey is different.
            Discover what makes learning more enjoyable
            and rewarding.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6
        md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={review.id}
              className="group relative flex h-full flex-col
              rounded-2xl border border-white/10
              bg-white/[0.03] p-6 sm:p-7
              transition-all duration-300
              hover:-translate-y-2
              hover:border-violet-400/30
              hover:bg-white/[0.05]"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-orange-400">
                  {Array.from(
                    { length: review.rating },
                    (_, index) => (
                      <FaStar key={index} size={15} />
                    )
                  )}
                </div>

                <FaQuoteRight
                  className="text-3xl text-violet-400/30
                  transition-colors duration-300
                  group-hover:text-violet-400/60"
                />
              </div>

              {/* Review text */}
              <p className="mt-6 flex-1 text-base
              leading-8 text-gray-300">
                "{review.review}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Student information */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0
                  items-center justify-center rounded-full
                  bg-gradient-to-br ${review.color}
                  text-sm font-extrabold text-white
                  shadow-lg`}
                >
                  {review.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-sm leading-5
                  text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>

            </article>
          ))}

        </div>

        {/* Bottom message */}
        <div
          className="mt-12 flex flex-col items-center
          justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-2
          text-violet-300">
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">
              Your journey starts here
            </span>
          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-500">
            Explore our courses and take the next step
            toward your learning goals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSec;

