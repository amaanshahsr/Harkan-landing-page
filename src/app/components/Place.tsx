import { MapPin } from "lucide-react";

export function Place() {
  return (
    <section className="px-6 py-24 md:py-32 bg-stone-100">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
          <h2 className="text-sm uppercase tracking-wider text-stone-500">
            Place & Practice
          </h2>
        </div>
        
        <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
          <p>
            Kochi is not incidental to this work. It is a city where the sea meets the land, 
            where histories overlap, where slowness and speed exist side by side.
          </p>
          
          <p>
            We work here because locality matters. Because the questions we ask about robots 
            are also questions about context, adaptation, and belonging. A robot that works 
            in one place may not work in another — not just technically, but socially, culturally.
          </p>
          
          <p>
            We are learning what it means to build machines that are sensitive to this.
          </p>
          
          <div className="pt-8 border-t border-stone-300 mt-12">
            <p className="text-2xl md:text-3xl leading-snug text-stone-900 tracking-tight">
              Our vision is simple: robots living among us, not as curiosities or exceptions, 
              but as ordinary companions in an extraordinary future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}