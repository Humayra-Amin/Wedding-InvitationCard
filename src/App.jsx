import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import OpeningInvitation from "./components/OpeningInvitation/OpeningInvitation";
import { ScrollProvider } from "./context/ScrollContext";
import MusicButton from "./components/MusicPlayer/MusicButton";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ScrollProvider>
      <OpeningInvitation>
        <div className="overflow-x-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFFBF5] to-white">
          <Navbar />
          <Home />

          {/* Floating Music Button */}
          <MusicButton />
        </div>
      </OpeningInvitation>
    </ScrollProvider>
  );
}

export default App;