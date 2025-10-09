import React from 'react';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section/section';
import Card from '../components/card/card';
import Hero from '../components/hero/hero';

export default function AboutPage() {
    return (
        <Section>
            <div className="flex flex-col items-center py-8">
                <h1 className="text-5xl font-extrabold text-neutral-800 mb-2 drop-shadow-lg">
                    About Us
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    Learn more about our commitment to helping animals
                </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                <Card title="Our Mission" className="bg-blue-50 text-gray-700">
                    <p>
                        We are dedicated to improving the lives of animals in need. Our mission is to provide support, resources, and care for animals, ensuring their safety and well-being.
                    </p>
                </Card>
                <Card title="Our Team" className="bg-teal-50 text-gray-700">
                    <p>
                        Our passionate team is made up of animal lovers, veterinarians, and volunteers who work tirelessly to rescue, rehabilitate, and find loving homes for animals.
                    </p>
                </Card>
                <Card title="Our Services" className="bg-green-50 text-gray-700">
                    <p>
                        We offer adoption services, veterinary care, and educational programs to promote responsible pet ownership and animal welfare in our community.
                    </p>
                </Card>
            </div>
        </Section>
    );
}