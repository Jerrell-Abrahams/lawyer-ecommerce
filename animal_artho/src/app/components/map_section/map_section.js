import Section from "../section/section";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function MapSection() {
    return (
        <Section className="bg-gray-300 text-black py-12 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight  decoration-accent decoration-4 ">
                Contact
            </h1>
            <p className="text-blac max-w-xl mx-auto mb-6">
                Want to say hello? Want to know more about us? I check my mail all the time, so I should be in touch <span className="font-bold">soon</span>
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-black my-8">
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
                    <a href="mailto:antois@animal-care.co.za" className="text-black hover:underline">
                        animalortho@animal-care.co.za
                    </a>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mb-8">
                <a href="#" className="text-accent hover:text-green-600 text-xl" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-accent hover:text-green-600 text-xl" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-accent hover:text-green-600 text-xl" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full max-w-4xl mx-auto">
                <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22962.51761548211!2d27.978789083937567!3d-26.14101395863357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575ff2d92dbd1%3A0x4d18c8cd1ab09c35!2s112%20Beyers%20Naud%C3%A9%20Dr%2C%20Franklin%20Roosevelt%20Park%2C%20Randburg%2C%202195!5e0!3m2!1sen!2sza!4v1697548919045!5m2!1sen!2sza"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md border-0 w-full h-96"
                ></iframe>
            </div>
        </Section>
    );
}