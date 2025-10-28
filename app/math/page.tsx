'use client'
import { useState } from "react"
import Image from "next/image"
import Gallery from "../components/gallery"

const gal1 = [
    {
        imglink: "/math-1.png",
        title: "2025 - International",
        describe: "Honorable Mention, International Mathematical Modeling Challenge - Manipulated statistical model and deployed multi-variable regression machine learning model to schedule a hypothetical global football league",
        link: "",
    },
    {
        imglink: "/math-2.png",
        title: "2025 -  State",
        describe: "Second Prize, Hanoi Mathematics Olympiad",
        link: "",
    },
    {
        imglink: "/math-3.png",
        title: "2024 -  International",
        describe: "Honorable Mention, International Mathematical Modeling Challenge - Deployed a linear regression model to predict growth rate of pets in 3 continents, assesing pets’ compatability",
        link: "",
    },
    {
        imglink: "/math-4.png",
        title: "2024 -  National",
        describe: "Bronze Medal, National Students Olympiad in Mathematics. https://www.youtube.com/watch?v=qIAgJ-vCABA",
        link: "https://www.youtube.com/watch?v=qIAgJ-vCABA",
    },
    {
        imglink: "/math-5.png",
        title: "2023 -  International",
        describe: "Southeast Asia Mathematics Olympiad",
        link: "",
    },
    {
        imglink: "/math-6.png",
        title: "2023 -  State",
        describe: "Valedictorian, Hanoi’s Highschool Entrance Exam (Specialization: Mathematics)",
        link: "",
    },
    {
        imglink: "/math-7.png",
        title: "2023 -  State",
        describe: "Third Prize, Hanoi Mathematics Olympiad",
        link: "",
    },
    {
        imglink: "/math-8.png",
        title: "2023 -  International",
        describe: "International Kangaroo Science Contest",
        link: "",
    },
    {
        imglink: "/math-9.png",
        title: "2022 -  International",
        describe: "First Place, American Mathematics Competition (AMC 10)",
        link: "",
    },
    {
        imglink: "/math-10.png",
        title: "2021 -  International",
        describe: "Bronze Award, Singapore & ASEAN Schools Olympiad",
        link: "",
    },
    {
        imglink: "/math-11.png",
        title: "2020 -  International",
        describe: "Silver Medal, Singapore & ASEAN Schools Olympiad",
        link: "",
    },
    {
        imglink: "/math-12.png",
        title: "2019 -  International",
        describe: "Silver Medal, Singapore International Math Olympiad Contests",
        link: "",
    },
    {
        imglink: "/math-13.png",
        title: "2019 -  International",
        describe: "Silver Medal, American Mathematics Olympiad",
        link: "",
    },
    {
        imglink: "/math-14.png",
        title: "2019 -  International",
        describe: "Silver Medal, Singapore International Math Olympiad Contests",
        link: "",
    },
    {
        imglink: "/math-15.png",
        title: "2019 -  International",
        describe: "Silver Medal, International Mathematics Assessments for Schools",
        link: "",
    },
    {
        imglink: "/math-16.png",
        title: "2019 -  International",
        describe: "HonTop 10%, International Kangaroo Mathematic Olympiad",
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
                <Image src={'/math-bg-1.png'} alt="" width={1256} height={728} ></Image>
                <div className=" p-14 rounded-2xl relative -top-20 h-98 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]">

                    <div className="relative z-1 text-[#065A4C] text-[28px] text-justify font-[Abhaya_Libre]">
                        If Cupid were a mathematician, he’d model factors and outcomes instead of relying on whim. Applied Mathematics quietly matches – teams in tournaments, crops to math, images to labels – connecting people with nature, and nature with data through reason and insight.
                    </div>
                </div>
            </div>

            <div className="-space-y-20 -mt-40">
                <div className={`relative ${active === 'a' ? "h-[1140]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('a')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Achievements
                        </div>
                        <div className={`${active === 'a' ? 'block' : 'hidden'}`}>
                            <div className="text-[28px]">
                                Honored with national and international math awards, I’ve turned problem-solving into both passion and pursuit – each medal marking not just victory, but a deeper understanding of how logic shapes the world.
                            </div>
                            <Gallery items={gal1} />
                        </div>

                    </div>
                </div>
                <div className={`relative ${active === 'b' ? "h-[1900]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('b')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Research
                        </div>
                        <div className={`${active === 'b' ? 'block' : 'hidden'} `}>
                            After earning Bronze in the National Students Olympiad in Mathematics, I stepped away from competition to explore a new path – transforming pure problem-solving into applied mathematics and research.
                            <div className="flex gap-5 my-10">
                                <div className="w-[338]">
                                    I began by immersing myself in the language of mathematics that breathes within every AI model and optimization problem – vector spaces, linear algebra, and multivariable calculus – each concept unfolding like a new dimension of thought.
                                </div>
                                <div className="flex ">
                                    <Image src={'/math-17.png'} alt="" width={245} height={352}></Image>
                                    <Image src={'/math-18.png'} alt="" width={245} height={352}></Image>
                                    <Image src={'/math-19.png'} alt="" width={245} height={352}></Image>
                                </div>
                            </div>
                            During that journey, I stumbled upon a chapter intertwining matrices and number theory. An example on the balancing matrix of the Fibonacci sequence caught my eye, and a quiet question bloomed within me: could this elegant harmony be extended – to the Pell and Pell–Lucas sequences, too?
                            <Image src={'/math-20.png'} alt="" width={1103} height={422}></Image>
                            <div className="flex my-10 gap-10">
                                <Image src={'/math-21.png'} alt="" width={373} height={388}></Image>
                                <div>What began as a spark – a question of balance in Fibonacci’s rhythm – grew into a generalized matrix framework uniting Fibonacci and Pell models. Through linear algebra and induction, I proved their hidden harmonies, unveiling Binet-type, Cassini-like, and divisibility properties through determinants and eigenvalues. The work now lives on in the HNUE Journal of Science: Natural Science.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`relative ${active === 'c' ? "h-[2000]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('c')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Project & Community
                        </div>
                        <div className={`${active === 'c' ? 'block' : 'hidden'}`}>
                            After diving deep into linear algebra and research, I realized its beauty lies not in complexity but in clarity – even secondary students can grasp its elegance. So I co-founded HMathSpace, a haven where I share linear algebra and multivariable calculus, giving back what I’ve learned and inspiring young minds to explore the mathematics behind AI.
                            <br />
                            <br />
                            Through HMathspace, I share monthly lectures on Facebook – over 10 videos translating linear algebra and calculus into inspiration, inviting young minds to see math as the language of AI and possibility.
                            <div className="flex">
                                <Image src={'/math-22.png'} alt="" width={569} height={326}></Image>
                                <Image src={'/math-23.png'} alt="" width={569} height={326}></Image>
                            </div>
                            Seeing the impact of my series, over three local authorities and secondary schools invited me to lecture – sharing the beauty of math, inspiring curiosity, and guiding students through the first steps of linear algebra and AI.
                            <div className="flex">
                                <Image src={'/math-24.png'} alt="" width={614} height={346}></Image>
                                <Image src={'/math-25.png'} alt="" width={523} height={346}></Image>
                            </div>
                            Whether traveling hundreds of kilometers to teach at Dong Tien or Huy Van Secondary School, I find the same spark in every classroom – hands raised, eyes bright with wonder, questions flowing about AI and math. In their curiosity, I see my younger self, tracing how numbers could one day create machines that think like us
                            <br /><br />
                            <div className="flex gap-15">
                                <div>The surprise came when Hanoi–Amsterdam High School for the Gifted, class 8A – the city’s specialized math class – invited me to teach matrices. Standing before those bright minds, I felt both nostalgia and joy, sharing the very language that once shaped my own journey.
                                </div>
                                <Image src={'/math-26.png'} alt="" width={591} height={339}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'd' ? "h-[1400]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('d')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Internship
                        </div>
                        <div className={`${active === 'd' ? 'block' : 'hidden'}`}>
                            Alongside achievements and research, I ventured into the world where mathematics becomes a working language – applying its precision and logic in professional internships and real-world projects that bridge theory with impact.
                            <br /><br />
                            <div className="flex gap-15">
                                <div className="flex">
                                    <Image src={'/math-27.png'} alt="" width={230} height={410}></Image>
                                    <Image src={'/math-28.png'} alt="" width={290} height={410}></Image>
                                </div>
                                <div className="w-[538]">In collaboration with Prof. Trinh Van Chien at HUST, I developed a portable EEG device and explored the symphony of brain waves through machine learning – collecting over a hundred datasets to train a Support Vector Machine model that analyzed brainwave data and classify it into sleepy and awake
                                    Github: https://github.com/gitLamHoang/Classfying-brain-wave-state
                                </div>
                            </div>
                            <br /><br />
                            <div className="flex gap-15">

                                <div className="w-[538]">As a Teaching Assistant at VietElite, Hanoi’s premier extracurricular center, I guided students in the specialized math class – diving deep into problem-solving, precision, and the art of explanation. Through this role, I glimpsed the teacher’s perspective: how to nurture curiosity, build patience, and craft clarity – whether through thoughtful guidance or a beautifully written LaTeX proof.
                                </div>
                                <div className="flex flex-col">
                                    <Image src={'/math-29.png'} alt="" width={538} height={303}></Image>
                                    <div className="flex">
                                        <Image src={'/math-30.png'} alt="" width={264} height={217}></Image>
                                        <Image src={'/math-31.png'} alt="" width={274} height={217}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Image src={'/mystory-bg-2.png'} alt="" width={1600} height={900} className="absolute bottom-0 left-0 z-0"></Image>
        </div>
    )
}