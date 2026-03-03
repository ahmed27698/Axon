import React from 'react';

export const QuoteSection: React.FC = () => {
    return (
        <section className="relative w-full bg-black py-24 px-6 text-center ">
            <div className="mx-auto max-w-5xl space-y-8">
                <div className="flex justify-center">
                    {/* Sparkle Icon */}
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M19 16L19.5 18.2L21.7 18.7L19.5 19.2L19 21.4L18.5 19.2L16.3 18.7L18.5 18.2L19 16Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                </div>

                <blockquote className="">
                    <p className="text-2xl font-normal leading-relaxed text-white md:text-4xl px-4">
                        &quot;Success at Axon isn&apos;t just about the technology—it&apos;s about the brilliant minds behind it. <span className="text-blue-600">Meet the architects of your digital transformation.</span>&quot;
                    </p>
                </blockquote>
            </div>
        </section>
    );
};
