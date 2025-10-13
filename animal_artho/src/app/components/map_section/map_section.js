import Section from "../section/section";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function MapSection() {
  return (
    <Section className="bg-gray-50 text-black px-4 py-0"> 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Contact Us</h3>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>17 Bradford Road, Johannesburg, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>Call/WhatsApp 073 617 2471</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-black" />
              <a
                href="mailto:admin@animalortho.co.za"
                className="text-black hover:underline"
              >
                admin@animalortho.co.za
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-accent hover:text-blue-600 text-xl" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-accent hover:text-purple-600 text-xl" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-accent hover:text-green-600 text-xl" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="md:w-1/2 w-full h-96 relative">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22962.51761548211!2d27.978789083937567!3d-26.14101395863357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575ff2d92dbd1%3A0x4d18c8cd1ab09c35!2s112%20Beyers%20Naud%C3%A9%20Dr%2C%20Franklin%20Roosevelt%20Park%2C%20Randburg%2C%202195!5e0!3m2!1sen!2sza!4v1697548919045!5m2!1sen!2sza"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md border-0"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
