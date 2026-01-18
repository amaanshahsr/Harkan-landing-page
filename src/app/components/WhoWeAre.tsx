import { Users } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
          <h2 className="text-sm uppercase tracking-wider text-stone-500">
            Who We Are
          </h2>
        </div>

        <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
          <p>
            Harkan began in Kochi, in long conversations between three people —{" "}
            <span className="text-stone-900">
              <strong>Hilal, Rinshad, and Nahid</strong>
            </span>{" "}
            — who shared a quiet curiosity about what it means for humans and
            machines to coexist.
          </p>

          <p>
            We are not a lab. We are not a factory. We are a studio — a place
            where ideas about intelligence, embodiment, and everyday life come
            together in the form of robots.
          </p>
        </div>
      </div>
    </section>
  );
}
