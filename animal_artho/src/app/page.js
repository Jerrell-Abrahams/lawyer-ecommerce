import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import MapSection from "./components/map_section/map_section";
import Image from "next/image";

const Index = () => {
  return (
    <Section>
      <Hero />

      {/* Section 1 — Image Right */}
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Restoring Mobility
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every step matters. Through innovative orthopedic solutions,
                we help animals regain their natural movement after injury or
                surgery. Our prosthetic components are designed to work with
                veterinarians and rehab specialists, ensuring comfort,
                durability, and improved mobility for each patient.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/horse.jpg"
                alt="horse.jpg"
                fill            // makes it cover the parent div
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Image Left */}
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Precision Engineering
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our prosthetic components are engineered with precision and
                care. By understanding the unique anatomy of each species, we
                supply parts that integrate seamlessly into veterinary treatment
                plans. This ensures reliable performance and improved patient
                outcomes for animals in need of orthopedic support.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/doggy.jpg"
                alt="horse.jpg"
                fill            // makes it cover the parent div
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Section 3 — Image Right */}
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2 h-56 md:h-64 flex items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
                Supporting Veterinary Care
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We partner with veterinary clinics, animal hospitals, and rehab
                specialists to provide high-quality prosthetic parts. By
                handling the supply side, we enable professionals to focus on
                what truly matters — helping animals heal, move, and thrive.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 md:h-64 relative">
              <Image
                src="/images/puppy.jpg"
                alt="horse.jpg"
                fill            // makes it cover the parent div
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