import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Heart, Lock } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container-custom text-center max-w-4xl">
                    <h1 className="text-5xl font-bold mb-6 tracking-tight">
                        About <span className="text-accent">Friends.</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        We are building the social network for people, not for advertisers.
                        A place where connection means connection, not consumption.
                    </p>
                </div>
            </section>

            {/* Vision & Values */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                                <p>
                                    Social media has lost its way. It&apos;s become "media" - focused on content consumption,
                                    viral algorithms, and keeping you addicted. The "social" part - authentic connection
                                    with people you actually know - has been pushed aside.
                                </p>
                                <p>
                                    Friends exists to bring the social back. We believe in a chronological feed,
                                    absolute privacy, and a platform that serves you, not an algorithm.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <Lock className="w-10 h-10 text-accent mb-4" />
                                <h3 className="font-bold text-xl mb-2">Private by Default</h3>
                                <p className="text-gray-500 text-sm">Your data belongs to you. No tracking, no data selling.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <Users className="w-10 h-10 text-blue-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Real Friends</h3>
                                <p className="text-gray-500 text-sm">Connect with people you know. No influencers, no noise.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <Shield className="w-10 h-10 text-green-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">No Algorithm</h3>
                                <p className="text-gray-500 text-sm">See posts in order. You control what you see, not us.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <Heart className="w-10 h-10 text-red-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Human First</h3>
                                <p className="text-gray-500 text-sm">Designed for mental well-being, not addiction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-12">The Team</h2>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 inline-block text-left">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                                {/* Placeholder for Benedict's image if available, otherwise gray circle */}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Benedict Kunzmann</h3>
                                <p className="text-accent font-medium mb-4">Founder</p>
                                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                                    Friends is independent and owned solely by its founder. No VC money. No outside investors.
                                    This ensures we stay true to our mission of privacy and authentic connection forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
