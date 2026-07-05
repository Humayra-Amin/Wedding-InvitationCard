import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useScroll } from "../../context/ScrollContext";

const Navbar = () => {
  const {
    heroRef,
    storyRef,
    eventsRef,
    galleryRef,
    // rsvpRef,
    locationRef,
    scrollTo,
  } = useScroll();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { title: "Home", ref: heroRef },
    { title: "Story", ref: storyRef },
    { title: "Events", ref: eventsRef },
    { title: "Gallery", ref: galleryRef },
    // { title: "RSVP", ref: rsvpRef },
    { title: "Location", ref: locationRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;

      setScroll(current > 50);

      if (current > lastScroll && current > 150) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <nav
        className={`fixed left-1/2 top-5 z-[999] w-[94%] max-w-7xl
        -translate-x-1/2 rounded-full transition-all duration-500
        ${
          scroll
            ? "border border-white/50 bg-white/70 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent"
        }
        ${
          showNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-32 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

          <button
            onClick={() => {
              scrollTo(heroRef);
              setActive("Home");
            }}
            className="flex items-center gap-4"
          >
            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              text-lg
              font-semibold
              "
              style={{
                borderColor: "#C9A227",
                color: "#C9A227",
                background: "#FFFDF8",
              }}
            >
              ED
            </div>

            <div className="text-left">

              <h2 className="font-serif text-xl text-[#2B2B35]">
                Emma & Daniel
              </h2>

              <p className="text-xs tracking-[0.3em] text-[#C9A227]">
                18 • 12 • 2027
              </p>

            </div>
          </button>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  scrollTo(item.ref);
                  setActive(item.title);
                }}
                className="group relative text-gray-700 transition"
              >
                <span
                  className={`transition duration-300 ${
                    active === item.title
                      ? "text-[#C9A227]"
                      : "group-hover:text-[#C9A227]"
                  }`}
                >
                  {item.title}
                </span>

                <span
                  className={`absolute left-0 -bottom-2 h-[2px]
                  bg-[#C9A227] transition-all duration-300
                  ${
                    active === item.title
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? (
              <HiX size={30} />
            ) : (
              <HiMenuAlt3 size={30} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          fixed
          left-1/2
          top-24
          z-[998]
          w-[90%]
          max-w-sm
          -translate-x-1/2
          rounded-3xl
          border
          border-white/60
          bg-white/90
          p-6
          shadow-2xl
          backdrop-blur-xl
          lg:hidden
          "
        >
          <div className="space-y-6">

            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  scrollTo(item.ref);
                  setActive(item.title);
                  setOpen(false);
                }}
                className="block w-full text-center text-lg transition hover:text-[#C9A227]"
              >
                {item.title}
              </button>
            ))}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;