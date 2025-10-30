'use client'
import { useState } from "react"
import Image from "next/image"
import Gallery from "../components/gallery"
import Link from "next/link"

const data1 = [
    {
        i: "/garden-1.png",
        t: "200km away from home for 3 weeks to learn Math, would you go?I would, and it was great. Meeting 300 gifted students across the nations, all preparing for the Olympiad."
    }, {
        i: "/garden-2.png",
        t: "What an honor it is to be representing Hanoi - Amsterdam Highschool for the Gifted to participate in the summer school hosted by Vietnam Institute for Advanced Study in Mathematics"
    }, {
        i: "/garden-3.png",
        t: "6 hours a day learning math. Calculus, optimization, analytical geometry. It was hard, but I love this feeling."
    }, {
        i: "/garden-4.png",
        t: "Placing 20/300, bringing the 1st place Team overall for my school."
    },
]

const data2 = [
    {
        i: "/garden-9.png",
        t: "As a Class President, organizing special events is the most interesting part. I got to be creative with what I give, and what I praise  https://www.youtube.com/watch?v=pu9WIg5aOuY https://www.youtube.com/watch?v=OVtBLwhlMXQ"
    }, {
        i: "/garden-10.png",
        t: "But, a capable leader, also leads everyone to aim for the better. As such, I found Bolster and Cover - Math Class’s Project, where we fundraised for underprivileged kids. We customized UNO cards with different themes and sold them to students in our school."
    }, {
        i: "/garden-11.png",
        t: "With a total of $2000 raised, we organized a trip to SOS Village, where we taught orphans and hosted Tet holidays for them."
    }, {
        i: "/garden-12.png",
        t: "Sometimes, I also got to represent my class. Once, I represented Math Class and presented the traditional Tet Holiday. We placed 1st in the school !!"
    },
]

const data3 = [
    {
        i: "/garden-13.png",
        t: "In the heated debates of the IvyPrep Debate Championship - where I placed 2nd -  I grasped a profound truth: logical thinking and presentation skills are two sides of the same coin – mathematics only finds its true purpose when we can interpret it for others to understand.",
        l: "https://giaoducthoidai.vn/hoc-sinh-ha-noi-tranh-bien-tieng-anh-ve-goc-khuat-noi-tam-con-nguoi-post517429.html"
    }, {
        i: "/garden-14.png",
        t: "When I turned 13, I stepped into the World Scholar’s Cup where I also combined my debate skills with knowledge and skills ranging in many different subjects: Science, Social Studies, History, Literature,."
    }, {
        i: "/garden-15.png",
        t: "That journey transformed me: amid hundreds of students from across the globe, I discovered that mathematical thinking was a bridge between us, transcending any language barriers,"
    }, {
        i: "/garden-16.png",
        t: "Through the World Scholar’s Cup, I strengthened my analytical reasoning and interdisciplinary thinking — connecting science, logic and literature to real-world problems."
    }, {
        i: "/garden-17.png",
t: "I conversed with international peers about global challenges — environment, energy, technology — and realized that mathematical reasoning could unlock solutions to them all. That year, I placed 3rd Globally, ranking higher than teams from 20+ countries",
    }, {
        i: "/garden-18.png",
        t: "After all, Debate is a field that trained me to be a person who could communicate my thoughts confidently, fluently, and expressively."
    },
]

const gal1 = [
    {
        imglink: "/garden-19.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-20.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-21.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-22.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-23.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-24.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-25.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-26.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-27.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-28.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-29.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-30.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-31.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-32.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-33.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-34.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-35.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-36.png",
        title: "",
        describe: "",
        link: "",
    }, {
        imglink: "/garden-38.png",
        title: "",
        describe: "",
        link: "",
    },
]

export default function MathPage() {
    const [active, setActive] = useState<string | null>(null)

    const handleClick = (key: string) => {
        setActive(active === key ? null : key)
    }
    return (
        <div className="w-full p-23 relative text-[#065A4C] font-[Abhaya_Libre] text-[28px] text-justify">
            <div className="relative z-1">
                <Image src={'/garden-bg.png'} alt="" width={1256} height={728} ></Image>
                <div className=" p-14 rounded-2xl relative -top-20 h-112 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]">

                    <div className="relative z-1 text-[#065A4C] text-[28px] text-justify font-[Abhaya_Libre]">
                        A corner of curiosity and creativity, where ideas bloom, experiments grow, and passions take root. Do you think I am only drawn to math, sports, and soil? Think again. I am not a typical student – I am a polymath, a seeker of knowledge and experience. A capable leader, a human who gives back, and a scholar who debates, writes, and questions, I cultivate every facet of myself, letting each endeavor color the journey beyond the classroom
                    </div>
                </div>
            </div>

            <div className={`-space-y-20 -mt-40 ${active ? '' : "*:hover:scale-105"}`}>
                <div className={`relative ${active === 'a' ? "h-[1600]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('a')}>
                        <div className="text-[73px] font-[Judson] font-bold text-left">
                            Summer Program
                        </div>
                        <div className={`${active === 'a' ? 'block' : 'hidden'}`}>
                            <div className="font-bold text-[32px]">
                                Mathematics Summer School <br></br>
                                (VietNam Institute for Advanced Study  in Mathematics)
                            </div>
                            <div className="flex gap-2 pt-10">
                                {data1.map((each, i) => {
                                    return (
                                        <div className="flex-1" key={i}>
                                            <Image src={each.i} alt="" height={190} width={277}></Image>
                                            <div className="text-base p-3">{each.t}</div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="font-bold text-[32px] mt-10">
                                Harvard Model Congress Leadership Program
                            </div>
                            Turns out, leadership is more than just gathering people and inspiring people. Special thanks to Harvard Model Congress for changing my perspective about leadership, while also helped me to become one.
                            <div className="flex justify-around">
                                <div className="w-[561]">
                                    <Image src={'/garden-5.png'} alt="" height={391} width={561}></Image>
                                    <div>
                                        Shoutout to my mentors: Matthew and Cameron, thanks for commenting on my leadership style. Never knew there were that many types of leadership to be honest.
                                    </div>
                                </div>
                                <div className="w-[293]">
                                    <Image src={'/garden-6.png'} alt="" height={391} width={293}></Image>
                                    <div>
                                        Pitching a startup idea that ended up placing me with the highest score.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'b' ? "h-[1200]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('b')}>
                        <div className="text-[73px] font-[Judson] font-bold text-left">
                            Delta Global School Program
                        </div>
                        <div className={`${active === 'b' ? 'block' : 'hidden'}`}>
                            I studied at Delta Global School (The Dewey Schools) — an American-affiliated program in Vietnam funded by billionaire David Sonnenberg — to experience U.S.-style education.
                            <div className="flex pb-10">
                                <Image className="relative z-1" src={'/garden-7.png'} alt="" height={478} width={412}></Image>
                                <Image className="relative -left-10" src={'/garden-8.png'} alt="" height={478} width={764}></Image>
                            </div>
                            It was a transformative year: learning entirely in English, adapting to new methods, collaborating with international teachers, and sharing memorable experiences with my DGS friends.
                            <br /><br />
                            When the program shifted its direction, I chose to return to Hanoi–Amsterdam High School, carrying with me confidence, adaptability, and a broader perspective on learning — the foundation for my passion in mathematics and AI.
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'c' ? "h-[1000]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('c')}>
                        <div className="text-[73px] font-[Judson] font-bold text-left">
                            Class President Hanoi Amsterdam
                        </div>
                        <div className={`${active === 'c' ? 'block' : 'hidden'}`}>
                            Class president for three years, respected by teachers and cherished by classmates – it’s me, Phan Hoang Lam, shaping community and leading with heart

                            <div className="flex gap-2 pt-10">
                                {data2.map((each, i) => {
                                    return (
                                        <div className="flex-1" key={i}>
                                            <Image src={each.i} alt="" height={190} width={277}></Image>
                                            <div className="text-base p-3">{each.t}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'd' ? "h-[1300]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('d')}>
                        <div className="text-[73px] font-[Judson] font-bold text-left">
                            Debate & World Scholars Cup
                        </div>
                        <div className={`${active === 'd' ? 'block' : 'hidden'}`}>
                            Communication is the bridge between minds –  a dance of logic and empathy. Through debate, I learned that every word carries power: to persuade, to unite, to shape the rhythm of understanding.
                            <br />
                            <div className="grid grid-cols-3">
                                {data3.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <Image src={e.i} alt="" height={252} width={367}></Image>
                                            <div className="text-base p-3">
                                                {e.t}
                                                {e.l && (
                                                <Link
                                                    href={e.l}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-bold text-[#065A4C] hover:underline"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    [Click here]
                                                </Link>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'e' ? "h-[600]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('e')}>
                        <div className="text-[73px] font-[Judson] font-bold text-left">
                            Volunteering
                        </div>
                        <div className={`${active === 'e' ? 'block' : 'hidden'}`}>
                            Volunteering taught me that impact isn’t measured by trophies or titles, but by the lives we touch – in every class I teach, every smile I spark, every act of giving back.
                            <Gallery items={gal1} />
                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/mystory-bg-2.png'} alt="" width={1600} height={900} className="absolute bottom-0 left-0 z-0"></Image>
        </div>
    )
}