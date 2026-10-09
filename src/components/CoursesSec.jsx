
import courses from "../data/courses";
import CourseCard from "./CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const CoursesSec = () => {
  return (
    <section
      id="courses"
      className="relative overflow-hidden scroll-mt-16
      bg-gradient-to-b from-[#111329] to-[#090B18]
      py-20 text-white md:py-24"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-32 top-20
        h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row
        md:items-end md:justify-between">

          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2
            rounded-full border border-violet-400/20
            bg-violet-400/10 px-4 py-2 text-sm
            font-semibold text-violet-300">
              <FaGraduationCap />
              YOUR LEARNING JOURNEY
            </span>

            <h2 className="mt-5 text-3xl font-extrabold
            tracking-tight sm:text-4xl md:text-5xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r
              from-violet-300 via-purple-400 to-orange-300
              bg-clip-text text-transparent">
                Courses
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base
            leading-7 text-gray-400 sm:text-lg">
              Discover carefully selected courses,
              develop valuable skills, and take the
              next step toward your future.
            </p>
          </div>

          <a
            href="#getstarted"
            className="group inline-flex w-fit shrink-0
            items-center gap-3 rounded-xl
            border border-white/10 bg-white/5
            px-5 py-3 font-semibold text-gray-200
            transition duration-300
            hover:border-violet-400/40
            hover:bg-violet-500/10 hover:text-white"
          >
            Start Learning
            <FaArrowRight className="transition-transform
            duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Courses Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="courses-swiper !overflow-visible"
        >
          {courses.map((cours) => (
            <SwiperSlide
              key={cours.id}
              className="!h-auto pb-12"
            >
              <CourseCard cours={cours} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom note */}
        <div className="mt-2 flex flex-wrap items-center
        justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">
            Find your next skill. Build your future.
          </p>

          <span className="text-sm font-medium text-violet-300">
            Keep learning. Keep growing.
          </span>
        </div>

      </div>
    </section>
  );
};

export default CoursesSec;

