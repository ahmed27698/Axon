"use client";

import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    onContact: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, onContact }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                <span className="font-mono text-xl font-bold text-blue-500">{">_"}</span>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {title}
            </h3>

            <p className="mb-8 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {description}
            </p>

            <button
                onClick={onContact}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-all hover:gap-3 hover:text-blue-400"
            >
                Order Now
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                >
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Subtle bottom gradient sweep */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
        </div>
    );
};
