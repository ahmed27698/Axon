"use client";

import React, { useState } from 'react';
import { ServiceCard } from './Card';
import { ContactModal } from './ContactModal';

const SERVICES = [
    {
        id: 'landing',
        title: 'Landing Page',
        description: 'Bespoke, high-converting landing pages tailored to your brand identity and business goals.'
    },
    {
        id: 'refactor',
        title: 'Code Refactoring',
        description: 'Transform legacy code into scalable, clean, and maintainable architectures following SOLID principles.'
    },
    {
        id: 'mobile',
        title: 'Mobile App',
        description: 'Cross-platform mobile applications that provide native-like performance and exceptional user experience.'
    },
    {
        id: 'web-solution',
        title: 'Web Solutions',
        description: 'Comprehensive web architectures designed for high performance, reliability, and security.'
    },
    {
        id: 'web-apps',
        title: 'Web Apps',
        description: 'Advanced web applications (PWAs, SPAs) built with the latest technologies like React and Next.js.'
    },
    {
        id: 'custom',
        title: 'Custom Software',
        description: 'Tailor-made software solutions designed specifically for your unique business workflows and needs.'
    }
];

export const ServicesSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const handleOpenModal = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        setIsModalOpen(true);
    };

    return (
        <section className="relative bg-black py-24 px-6 overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our Core Services
                    </h2>
                    <div className="mx-auto h-[4px] w-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            onContact={() => handleOpenModal(service.title)}
                        />
                    ))}
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceTitle={selectedService || ''}
            />
        </section>
    );
};
