// import logoFull from "figma:asset/f8dd32ec5f72a093b02aa281233f918185962722.png";
import logoFull from "@/assets/logo.svg";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 md:py-32">
      <div className="max-w-3xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-16">
          <img
            src={logoFull}
            alt="Harkan Robotics"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-stone-600 mb-8 tracking-wide uppercase text-sm">
          A studio for thinking machines
        </p>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12 text-stone-900">
          The boundary between humans and machines is fading.
        </h1>

        <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl">
          We're building robots that understand this — not as a future to fear,
          but as a relationship to learn.
        </p>
      </div>
    </section>
  );
}
