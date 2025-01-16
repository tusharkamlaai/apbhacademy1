'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";


const items = [
    {
        title: "What is Tailwind CSS?",
        content:
            "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
        title: "How does Next.js work?",
        content:
            "Next.js is a React framework that enables functionality like server-side rendering and static site generation.",
    },
    {
        title: "What makes this accordion premium?",
        content:
            "This accordion has smooth animations, is accessible, and looks great out of the box with Tailwind CSS.",
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-gray-300 last:border-none"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-indigo-500 focus:outline-none"
                    >
                        <span>{item.title}</span>
                        <ChevronDown
                            className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-500 ${openIndex === index ? "max-h-screen" : "max-h-0"
                            }`}
                    >
                        <div className="py-4 text-gray-600">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
