
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                                Connect with
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-normal">
                                    friends
                                </span>
                                <span className="block font-light">like never before</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light">
                                Experience the future of social networking with our innovative platform.
                                Share moments, discover communities, and build meaningful connections
                                in a safe and engaging environment.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Get Started Free
                            </button>
                            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg backdrop-blur-sm">
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex space-x-12 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-light text-white mb-1">1M+</div>
                                <div className="text-gray-400 text-sm font-medium">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-light text-white mb-1">50K+</div>
                                <div className="text-gray-400 text-sm font-medium">Communities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-light text-white mb-1">4.9</div>
                                <div className="text-gray-400 text-sm font-medium">App Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="w-full max-w-lg mx-auto bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-700/50">
                                {/* Mock App Interface */}
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                            <div>
                                                <div className="w-24 h-4 bg-gray-600 rounded-full"></div>
                                                <div className="w-20 h-3 bg-gray-700 rounded-full mt-2"></div>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                    </div>

                                    {/* Main content area */}
                                    <div className="w-full h-52 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-6">
                                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                            </div>
                                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                            </div>
                                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                    </div>

                                    {/* Text content */}
                                    <div className="space-y-3">
                                        <div className="w-full h-4 bg-gray-600 rounded-full"></div>
                                        <div className="w-4/5 h-4 bg-gray-700 rounded-full"></div>
                                        <div className="w-3/5 h-4 bg-gray-700 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
