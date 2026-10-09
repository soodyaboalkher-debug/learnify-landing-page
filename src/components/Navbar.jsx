
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Courses", href: "#courses" },
  { id: 3, name: "Features", href: "#features" },
  { id: 4, name: "Reviews", href: "#reviews" },
  {
    id: 5,
    name: "Get Started",
    href: "#getstarted",
    isButton: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 h-16 w-full border-b border-white/10 bg-[#090B18]/95 text-white shadow-lg shadow-black/20 backdrop-blur-md">

      <div className="relative flex h-full items-center justify-between px-5 md:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extrabold tracking-wide text-white md:text-3xl"
        >
          Learn<span className="text-[#A78BFA]">ify</span>
          <span className="ml-1 text-[#F97316]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden h-full items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                link.isButton
                  ? "ml-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-5 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
                  : "rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition duration-200 hover:bg-white/5 hover:text-[#A78BFA]"
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-xl text-[#A78BFA] transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Links */}
        {isOpen && (
          <div className="absolute left-0 top-16 flex w-full flex-col gap-1 border-b border-white/10 bg-[#090B18] p-4 shadow-xl md:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  link.isButton
                    ? "mt-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-4 py-3 text-center font-semibold text-white transition hover:brightness-110"
                    : "rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-[#A78BFA]"
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

