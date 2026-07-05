import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  const rsvpRef = useRef(null);
  const locationRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        heroRef,
        storyRef,
        eventsRef,
        galleryRef,
        rsvpRef,
        locationRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);