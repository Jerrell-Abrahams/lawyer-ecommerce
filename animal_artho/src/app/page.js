import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import Image from "next/image";

const Index = () => {
  return (
    <Section>
      <Hero />

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Precision OrthopaedicImplants & Instruments
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We supply veterinarians with expertly engineered implants and surgical instruments designed for accuracy, durability, and ease of use. Every product is developed to meet the exacting standards of modern veterinary orthopaedicsurgery.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/horse.jpg"
                alt="horse.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Custom Solutions for Complex Cases
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our  team  collaborates  with  veterinarians  to  design  bespoke orthopaediccomponents  and  case-specific instruments —ensuring optimal fit, function, and patient outcomes.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/doggy.jpg"
                alt="horse.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Surgical Planning & Technical Support
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We  provide  pre-operative  guidance,  product  selection  assistance,  and  technical  support  to  help veterinary professionals achieve the best surgical results.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/puppy.jpg"
                alt="horse.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Education & Training
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through  workshops,  demonstrations,  and  online  resources,  we  empower  veterinarians  with  the latest techniques and innovations in animal orthopaediccare.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/puppy.jpg"
                alt="horse.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Reliable Supply & After-Sales Service
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Animal Ortho Solutions ensures consistent availability of essential products, prompt delivery, and responsive post-purchase support to keep your practice running smoothly.              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/puppy.jpg"
                alt="horse.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default Index;