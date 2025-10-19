import { Bone, Droplets, HeartPulse, Scissors, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "../button/button";
const product_category = [
    {
        id: 1,
        title: "Orthopaedic Implants & Instruments",
        description: "Bone plates, screws, external fixators, TPLO, TTA, FHO sets, etc.",
        icon: Bone,
    },
    {
        id: 2,
        title: "Veterinary Consumables",
        subtitle: "Essential Tools for Everyday Care",
        description: "A comprehensive selection of veterinary consumables designed to meet the demanding needs of modern veterinary practices. Each product is sourced or manufactured to uphold the highest standards of sterility, safety, and usability, ensuring optimal patient outcomes and clinical efficiency.",
        icon: Droplets,
    },
    {
        id: 3,
        title: "Rehabilitation & Support Devices",
        description: "Slings, splints, physiotherapy aids, and hydrotherapy equipment.",
        icon: HeartPulse,
    },
    {
        id: 4,
        title: "Soft Tissue & Surgical Supplies",
        description: "Sutures, sterile drapes, instruments, implants, wound dressings.",
        icon: Scissors,
    },
    {
        id: 5,
        title: "Diagnostic & Medical Equipment",
        description: "Digital imaging accessories, anaesthesia circuits, and monitoring devices.",
        icon: Stethoscope,
    },
];

export default function Products() {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-gray-300 bg-gradient-to-b from-white/20 to-black/5">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl">
                        <h1 className="relative text-3xl md:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-gray-800">
                            Our Products

                            <div className="absolute -bottom-2 left-0 w-3/4 border-b-1 border-black-500"></div>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-gray-600">
                            Comprehensive veterinary solutions designed for excellence in animal healthcare.
                            Quality that professionals trust.
                        </p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-4 md:py-16">
                <div className="max-w-5xl mx-auto">
                    {product_category.map((product, index) => {
                        const IconComponent = product.icon;

                        return (
                            <article
                                key={product.id}
                                className="group relative border-b border-gray-300 last:border-b-0 py-12 hover:bg-muted/20 transition-colors duration-400 pl-6 overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#217f7f] origin-top scale-y-0 transition-transform duration-400 ease-out group-hover:scale-y-100 rounded-md py-2" />

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 hidden md:block">
                                        <div className="w-20 text-right">
                                            <span className="text-6xl font-bold text-gray-400 text-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {String(product.id).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 bg-[#217f7f]/20 border-[#217f7f]/60 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                                                <IconComponent className="w-9 h-9 text-primary text-[#217f7f]" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-xl md:text-3xl font-bold  text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                            {product.title}
                                        </h2>
                                        {product.subtitle && (
                                            <p className="text-base font-semibold text-[#217f7f] mb-3">
                                                {product.subtitle}
                                            </p>
                                        )}
                                        <p className="text-base md:text-lg !text-muted-foreground leading-relaxed mb-4 text-gray-600">
                                            {product.description}
                                        </p>

                                        <button className="inline-flex items-center gap-2 text-primary font-semibold opacity-100 md:opacity-0  md:group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-[#217f7f] hover:cursor-pointer">Learn more</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </article>


                        );
                    })}
                </div>

                <div className="mt-15 md:mt-24 max-w-5xl mx-auto">
                    <div className="border-t border-b border-gray-300 py-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    Need detailed specifications?
                                </h3>
                                <p className="text-muted-foreground text-gray-600">
                                    Contact our team for pricing and product information.
                                </p>
                            </div>
                            <Button>
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
