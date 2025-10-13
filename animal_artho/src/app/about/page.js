import React from 'react';
import Navbar from '../components/navbar/navbar';
import Section from '../components/section/section';
import Card from '../components/card/card';
import Hero from '../components/hero/hero';

export default function AboutPage() {
    return (
        <div>
            <Section className="pt-20">
                <div className="flex flex-col items-center py-8">
                    <h1 className="text-5xl font-extrabold text-neutral-800 mb-2">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl">
                        We are a specialized supplier of veterinary-grade orthopedic prosthetics and components, working with clinics and professionals to improve the quality of life for animals across the country.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                    <Card title="Our Mission" className="bg-blue-50 text-gray-700">
                        <p>
                            Our mission is to empower veterinarians and rehabilitation specialists by supplying reliable, precise, and durable prosthetic components that help animals regain mobility and live active lives.
                        </p>
                    </Card>

                    <Card title="Our Expertise" className="bg-teal-50 text-gray-700">
                        <p>
                            With deep knowledge of orthopedic design and manufacturing, we focus on quality, comfort, and innovation. Our products are designed to integrate seamlessly into veterinary procedures and rehabilitation programs.
                        </p>
                    </Card>

                    <Card title="Who We Serve" className="bg-green-50 text-gray-700">
                        <p>
                            We supply prosthetic parts to veterinary clinics, animal hospitals, and rehabilitation centers. By handling the supply side, we enable professionals to focus fully on patient care.
                        </p>
                    </Card>
                </div>
            </Section>
        </div>
    );
}
