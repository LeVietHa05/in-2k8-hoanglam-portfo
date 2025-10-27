
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
    {
        link: "/",
        text: "home"
    },  {
        link: "/mystory",
        text: "my story"
    },  {
        link: "/math",
        text: "Applied Mathematics"
    },  {
        link: "/soil",
        text: "Soil Odyssey"
    },  {
        link: "/athletic",
        text: " Athletic Pioneers"
    },  {
        link: "/garden",
        text: "My little garden"
    }
]

export default function Nav () {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#F8F474] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-8 py-4">
                    {navitems.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            className={`font-[Judson] text-2xl capitalize text-[#065A4C] font-medium transition-all duration-100 hover:border-b-2 hover:border-[#065A4C] ${
                                pathname === item.link
                                    ? "border-b-4 border-[#065A4C]"
                                    : "border-b-0"
                            }`}
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
