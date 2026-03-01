
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const faqs: { question: string; answer: string }[] = [
    {
        question: "Why a new social media platform?",
        answer: "Social media has become Media. The social aspect of it has been lost and its only focussing on clicks, likes and followers. Algorithms are the main driver of content and user experience while the social and friend aspect has been lost.\n\nFriends is a social media platform that puts the social aspect back into social media.\n\n We believe in a social platform which only exists for friends - private per default - every aspect focusing on data privacy - no algorithm and not doom-scrolling. A platform where the only focus is on your friends and not on your likes and followers."
    },
    {
        question: "Who owns Friends?",
        answer: "Friends is only owned by its founder (Benedict Kunzmann). There are no investors and no other owners.\n\n This decision was made to ensure that the platform stays true to its values and mission - ensuring absolute data privacy for ever. The goal is not to build a billion dollar company but to build a platform which values its users and their privacy."
    },
    {
        question: "Does Friends impose any censorship?",
        answer: "Friends is committed to protecting freedom of expression — but with that freedom comes responsibility.\n\nWe do not allow content that incites violence, hatred, pornographic content, racism or discrimination, nor do we permit harassment or the spread of dangerous misinformation."
    },
    {
        question: "Does Friends share the data with anybody?",
        answer: "No. We do not share any data with any third parties. Your data does only belogns to you and your friends."
    },
    {
        question: "How does Friends create the feed?",
        answer: "The feed is a chronological feed of your friends posts. Posts appear exactly when they’re shared by the people you follow — no reshuffling, no manipulation. "
    },
    {
        question: "Where does Friends store my data?",
        answer: "Currently, Friends core servers are hosted in Frankfurt, Germany — chosen for its reputation for strict data protection and privacy standards. It’s a location that reflects our commitment to performance, reliability, and user rights.\n\nFor speed and availability worldwide, we also make use of global CDNs and edge locations to ensure content loads quickly wherever our users are."
    },
    {
        question: "Will there be ads?",
        answer: "Yes. Friends will place advertisements in the feed and stories. These ads are personalizeds ads based on Google as a ad provider. The data used for the ads is only the data which is provided by Google and we do not share any data with ad providers."
    },
    {
        question: "Is Friends free? How does it generate revenue?",
        answer: "Yes. Friends is a free service. We generate revenue through advertisements. Optionally we will add a subscription model in the future which will remove the ads."
    },
    {
        question: "How secure is my data?",
        answer: "We take data security. All the data is only visible to yourself and to your accepted friends. Nobody else can see your data. We also encrypt all the data at rest and in transit to prevent unauthorized access."
    },
    {
        question: "How can I delete my account?",
        answer: "You can delete your account at any time by going to the settings page and clicking on the delete account button. Your account and all associated data will be permanently deleted and all your data will be removed."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequency Asked Questions</h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800"
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left font-medium text-lg focus:outline-none"
                        >
                            <span>{faq.question}</span>
                            <span className={clsx("transition-transform duration-300 text-gray-500", activeIndex === index ? "rotate-180" : "")}>
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-slate-700/50">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}