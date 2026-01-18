import { Lightbulb } from "lucide-react";

export function Philosophy() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
          <h2 className="text-sm uppercase tracking-wider text-stone-500">
            Our Enquiry
          </h2>
        </div>
        
        <div className="space-y-6 text-stone-800 text-lg leading-relaxed">
          <p>
            We are interested in taking robots out of laboratories and imaginative futures, 
            and into the texture of everyday life. Not as novelties. Not as spectacles. 
            But as things that simply work, quietly, alongside us.
          </p>
          
          <p>
            Our core principle is <span className="text-stone-900 italic">demystification</span>.
          </p>
          
          <p>
            We believe robots should be understood, not worshipped or feared. 
            To make them understandable, we must first understand them ourselves — 
            how they move, how they sense, how they learn, and where they fail.
          </p>
          
          <p>
            This means building in the open, learning through making, and refusing to 
            treat machines as either magic or inevitable.
          </p>
        </div>
      </div>
    </section>
  );
}