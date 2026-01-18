import { useEffect, useState } from "react";
import { CallToAction } from "./components/CallToAction";
import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { Contradiction } from "./components/Contradiction";
import { Philosophy } from "./components/Philosophy";
import { Place } from "./components/Place";
import logoFull from "@/assets/logo.svg";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for fonts to be loaded
    document.fonts.ready.then(() => {
      // optional: wait a tiny bit for smoother fade
      setTimeout(() => {
        setFadeOut(true); // start fade out

        // remove loader after fade transition (300ms)
        setTimeout(() => setLoading(false), 300);
      }, 100); // 100ms buffer
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-['Space_Grotesk']">
      {loading ? <Loader fadeOut={fadeOut} /> : <MainContent />}
    </div>
  );
}

const MainContent = () => (
  <>
    <Hero />
    <WhoWeAre />
    <Contradiction />
    <Philosophy />
    <Place />
    <CallToAction />
  </>
);

interface LoaderProps {
  fadeOut: boolean;
}

const Loader = ({ fadeOut }: LoaderProps) => {
  return (
    <div
      className={`w-full h-dvh flex flex-col items-center justify-center p-10
        transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <img
        src={logoFull}
        alt="Harkan Robotics"
        className="h-10 md:h-12 w-auto mb-6"
      />
    </div>
  );
};
