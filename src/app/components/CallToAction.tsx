import { Phone, Mail, MapPin } from "lucide-react";
import logoFull from "@/assets/logo.svg";

export function CallToAction() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="max-w-2xl mx-auto w-full text-center">
        <p className="text-stone-700 text-lg mb-8 leading-relaxed">
          We are at the beginning. If this resonates with you, we would love to
          have you with us.
        </p>

        <button
          onClick={() => {
            window.location.href =
              "mailto:Official@harkanrobotics.com?subject=Join%20the%20Waitlist";
          }}
          className="px-8 py-4 bg-[#FF5C1D] text-white tracking-wide uppercase text-sm 
             hover:bg-[#E54D0F] transition-colors duration-200 
             focus:outline-none focus:ring-2 focus:ring-[#FF5C1D] focus:ring-offset-2"
        >
          Join the Waitlist
        </button>

        {/* Footer */}
        <div className="mt-32 pt-16 border-t border-stone-300">
          {/* Logo */}
          <div className="mb-6">
            <img
              src={logoFull}
              alt="Harkan Robotics"
              className="h-8 w-auto mx-auto opacity-90"
            />
          </div>

          {/* Tagline */}
          <p className="text-stone-600 text-sm tracking-wide mb-12">
            A studio for thinking machines
          </p>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-sm text-stone-600 mb-12">
            <a
              href="tel:+919037647872"
              className="flex items-center gap-2 hover:text-stone-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>+91 90376 47872</span>
            </a>

            <a
              href="mailto:Official@harkanrobotics.com"
              className="flex items-center gap-2 hover:text-stone-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Official@harkanrobotics.com</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Kochi, Kerala, India</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-stone-500">© 2026 Harkan Robotics</p>
        </div>
      </div>
    </section>
  );
}
