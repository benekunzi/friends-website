"use client";

import React from "react";
import { Check, X } from "lucide-react";

export default function Comparison() {
    const comparisonData: { name: string, friends: boolean, others: boolean, friendsExplanation: string, otherExplanation: string }[] = [
        { name: "Who sees your posts?", friends: true, others: false, friendsExplanation: "Your and your friends", otherExplanation: "Advertisers, data brokers and algorithms" },
        { name: "Feed", friends: true, others: false, friendsExplanation: "Chronological feed", otherExplanation: "Algorithm based feed" },
        { name: "Data Selling", friends: true, others: false, friendsExplanation: "We do not sell your data. Ever.", otherExplanation: "Sell your data to advertisers, data brokers and AI." },
        { name: "Use AI", friends: true, others: false, friendsExplanation: "We do not use AI at all.", otherExplanation: "Use AI to manipulate your feed and feed their AI with your data." },
        { name: "Addiction", friends: true, others: false, friendsExplanation: "See what your friends posted. Log off.", otherExplanation: "Designed to keep you scrolling and engaged." },
        { name: "Target Users", friends: true, others: false, friendsExplanation: "Your friends", otherExplanation: "You - as a product" },
    ];

    return (
        <section className="py-24 container-custom">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl  mb-6">Designed different.</h2>
                    <p className="text-xl text-slate-300">See why people are making the switch.</p>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="grid grid-cols-3 gap-4 mb-6 border-b border-slate-700 pb-4 text-sm md:text-lg  text-start">
                        <div className="text-left pl-4">Feature</div>
                        <div className="text-accent ml-14">Friends</div>
                        <div className="text-slate-500 ml-14">Others</div>
                    </div>

                    {comparisonData.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-3 gap-4 py-6 border-b border-slate-800 hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-medium flex items-center">{item.name}</div>
                            <div className="flex justify-start items-center">
                                {item.friends ? (
                                    <div className="flex flex-row gap-2">
                                        <Check className="text-accent w-6 h-6 flex-shrink-0" />
                                        <span className="text-sm">{item.friendsExplanation}</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-2">
                                        <X className="w-6 h-6 flex-shrink-0" />
                                        <span className="text-sm">{item.otherExplanation}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-start items-center">
                                {item.others ? (
                                    <div className="flex flex-row gap-2">
                                        <Check className="text-red-500 w-6 h-6 flex-shrink-0" />
                                        <span className="text-sm">{item.otherExplanation}</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-2">
                                        <X className="w-6 h-6 flex-shrink-0" />
                                        <span className="text-sm">{item.otherExplanation}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
