import React from 'react';

export default function PrivacyPolicy() {
    return (
        <section className="py-24 container-custom">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Privacy Policy</h2>
                    <p className="text-xl text-slate-300">Last updated: February 4, 2026</p>
                </div>

                <div className="relative z-10">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-slate-800 rounded-2xl p-6">
                            <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
                            <p className="text-slate-300">Friends is a social media app that is designed to connect you with your friends and family. It is a free app that is available on both iOS and Android devices. Friends is a social media app that is designed to connect you with your friends and family. It is a free app that is available on both iOS and Android devices.</p>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-6">
                            <h3 className="text-2xl font-bold mb-4">2. Information We Collect</h3>
                            <p className="text-slate-300">Friends is a social media app that is designed to connect you with your friends and family. It is a free app that is available on both iOS and Android devices. Friends is a social media app that is designed to connect you with your friends and family. It is a free app that is available on both iOS and Android devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}