import React from 'react';
import Section from '../components/section/section';
import Card from '../components/card/card';
import { Button } from '../components/button/button';
import MapSection from '../components/map_section/map_section';
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className='pt-20 bg-gray-50'>
            <Section>
                <div className="flex flex-col items-center py-8">
                    <h1 className="text-5xl font-extrabold text-neutral-800 mb-2">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Have questions or need help? Send us a message below.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto p-5">
                    <Card title="Request A Quote" className="bg-white text-gray-800">
                        <form className="flex flex-col gap-4 mt-4">
                            <div className='flex gap-4'>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder='Your name'
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:gray-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder='example@gmail.com'
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:gray-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder='Your message here...'
                                    rows="5"
                                    required
                                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:gray-500"
                                ></textarea>
                            </div>

                            <Button className='flex w-1/2 justify-center items-center bg-accent mx-auto' type="submit">
                                Submit <ArrowRight className='ml-2 h-4 w-4 flex-shrink-0 self-center' />
                            </Button>
                        </form>
                    </Card>
                </div>
                <MapSection />
            </Section>
        </div>
    );
}
