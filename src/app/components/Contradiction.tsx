import { Binary } from "lucide-react";

export function Contradiction() {
  return (
    <section className="px-6 py-24 md:py-32 bg-stone-100">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <Binary className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
          <h2 className="text-sm uppercase tracking-wider text-stone-500">
            The Contradiction
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-2xl md:text-3xl leading-snug text-stone-900 tracking-tight">
            Moravec's Paradox tells us that what is easy for humans is hard for
            machines, and what is hard for humans is easy for machines.
          </p>

          <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
            <p>
              A robot can compute in milliseconds what would take a human years.
              Yet it stumbles over what a child does instinctively — recognizing
              a face, folding a shirt, understanding context.
            </p>

            <p>
              We find this paradox beautiful. It reveals something fundamental
              about intelligence, embodiment, and learning. It is the gap we are
              trying to close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
