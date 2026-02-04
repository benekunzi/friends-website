export default function Features() {
    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast",
            description: "Experience blazing fast performance with our optimized platform that loads instantly and keeps you connected."
        },
        {
            icon: "🔒",
            title: "Privacy First",
            description: "Your data is yours. We use end-to-end encryption and give you full control over your privacy settings."
        },
        {
            icon: "🌐",
            title: "Global Community",
            description: "Connect with people from around the world and discover diverse communities that match your interests."
        },
        {
            icon: "💬",
            title: "Rich Messaging",
            description: "Share photos, videos, voice messages, and more with our feature-rich messaging system."
        },
        {
            icon: "🎨",
            title: "Customizable",
            description: "Personalize your experience with themes, custom profiles, and flexible privacy controls."
        },
        {
            icon: "📱",
            title: "Cross Platform",
            description: "Seamlessly sync across all your devices - mobile, tablet, and desktop applications."
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gray-900 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center space-y-6 mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                        Why choose
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-normal">
                            SocialApp
                        </span>
                        <span className="block font-light">?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        We&apos;ve built the most intuitive and powerful social platform to help you
                        connect, share, and grow your network in meaningful ways.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 group border border-gray-700/50 hover:border-gray-600/50"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-medium text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 text-white border border-gray-700/50 backdrop-blur-sm">
                        <h3 className="text-3xl sm:text-4xl font-light mb-6 tracking-tight">
                            Ready to get started?
                        </h3>
                        <p className="text-xl mb-10 text-gray-300 font-light max-w-2xl mx-auto">
                            Join millions of users who are already connecting on SocialApp
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Start Free Trial
                            </button>
                            <button className="border border-gray-500 text-gray-300 px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg backdrop-blur-sm">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
