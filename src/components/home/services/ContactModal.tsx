"use client";

import React, { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, serviceTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        whatsapp: '',
        serviceType: serviceTitle || '',
    });

    // Update serviceType when modal opens with a different title
    React.useEffect(() => {
        setFormData(prev => ({ ...prev, serviceType: serviceTitle }));
    }, [serviceTitle, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted for service:', serviceTitle, formData);
        alert(`Thank you, ${formData.name}! Your request for ${serviceTitle} has been received.`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-2xl transition-all animate-in fade-in zoom-in duration-300">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white">Get {serviceTitle}</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                        Tell us about your project and we'll get back to you soon.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-focus focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Mobile Number</label>
                        <input
                            required
                            type="tel"
                            placeholder="+1 234 567 890"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-focus focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1.5">WhatsApp Number</label>
                        <input
                            type="tel"
                            placeholder="+1 234 567 890 (Optional)"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-focus focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Service Type</label>
                        <select
                            required
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-focus focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 appearance-none cursor-pointer"
                            value={formData.serviceType}
                            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        >
                            <option value="" disabled className="bg-zinc-900">Select a service</option>
                            <option value="Landing Page" className="bg-zinc-900">Landing Page</option>
                            <option value="Mobile App" className="bg-zinc-900">Mobile App</option>
                            <option value="Code Refactoring" className="bg-zinc-900">Code Refactoring</option>
                            <option value="Web Solution" className="bg-zinc-900">Web Solution</option>
                            <option value="Web Apps" className="bg-zinc-900">Web Apps</option>
                            <option value="Custom Software" className="bg-zinc-900">Custom Software</option>
                        </select>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
};
