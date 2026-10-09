import {
FaGraduationCap,
FaArrowRight,
FaGithub,
FaLinkedin,
FaFacebook,
FaHeart,
} from "react-icons/fa";

const Footer = () => {
const currentYear = new Date().getFullYear();

return ( <footer className="relative overflow-hidden border-t border-white/10 bg-[#070914] text-white">


  {/* Background Glow */}
  <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-8 lg:px-12">

    {/* Footer Main */}
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-xl shadow-lg shadow-violet-500/20">
            <FaGraduationCap />
          </span>

          <span className="text-2xl font-extrabold tracking-tight">
            Learn<span className="text-orange-400">ify</span>
          </span>
        </a>

        <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
          Discover new skills, explore your potential,
          and take the next step toward your future
          with Learnify.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold">Quick Links</h3>

        <ul className="mt-6 space-y-4 text-sm text-gray-400">
          <li>
            <a href="#home" className="transition hover:text-violet-300">
              Home
            </a>
          </li>

          <li>
            <a href="#courses" className="transition hover:text-violet-300">
              Courses
            </a>
          </li>

          <li>
            <a href="#features" className="transition hover:text-violet-300">
              Features
            </a>
          </li>

          <li>
            <a href="#reviews" className="transition hover:text-violet-300">
              Reviews
            </a>
          </li>
        </ul>
      </div>

      {/* Learning */}
      <div>
        <h3 className="text-lg font-bold">Learning</h3>

        <ul className="mt-6 space-y-4 text-sm text-gray-400">
          <li>
            <a href="#courses" className="transition hover:text-orange-300">
              Web Development
            </a>
          </li>

          <li>
            <a href="#courses" className="transition hover:text-orange-300">
              UI/UX Design
            </a>
          </li>

          <li>
            <a href="#courses" className="transition hover:text-orange-300">
              Programming
            </a>
          </li>

          <li>
            <a href="#getstarted" className="transition hover:text-orange-300">
              Start Learning
            </a>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div>
        <h3 className="text-lg font-bold">Ready to Grow?</h3>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Your next skill could open a new door.
          Start exploring today.
        </p>

        <a
          href="#getstarted"
          className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/30"
        >
          Get Started
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
      <p className="text-sm text-gray-500">
        © {currentYear} Learnify. All rights reserved.
      </p>

      <p className="flex items-center gap-2 text-sm text-gray-500">
        Made with
        <FaHeart className="text-orange-400" />
        for learners everywhere
      </p>
    </div>

  </div>
</footer>


);
};

export default Footer;
