'use client'
import { useState } from "react"
import Image from "next/image"
import Gallery from "../components/gallery"

const gal1 = [
    {
        imglink: "/athletic-1.png",
        title: "",
        describe: "The start of my journey, ranking 5th in the IronMan Kids",
        link: "",
    }, {
        imglink: "/athletic-2.png",
        title: "",
        describe: "First swim meets in my career, earning a double gold in 50m butterfly and backstroke",
        link: "",
    }, {
        imglink: "/athletic-3.png",
        title: "",
        describe: "You see that lifebuoy right there? Just some safety measure before a 4km open water-swim",
        link: "",
    }, {
        imglink: "/athletic-4.png",
        title: "",
        describe: "Of course, I cannot miss out on the conditioning and physical training though.",
        link: "",
    }, {
        imglink: "/athletic-5.png",
        title: "",
        describe: "Finally, a Bronze Medal for 100m freestyle at the Hanoi Swim Competition.",
        link: "",
    }, {
        imglink: "/athletic-6.png",
        title: "",
        describe: "First Prize in the Bai Tu Long Bay Open Water Swimming Championship (Vietnam, 2022)",
        link: "",
    }, {
        imglink: "/athletic-7.png",
        title: "",
        describe: "Ranked 5 in the National Relay 4 x 100",
        link: "",
    }, {
        imglink: "/athletic-8.png",
        title: "",
        describe: "Of course, I don’t forget to train consistently. After all, it is such a blessing to be immersing myself in the blue water.",
        link: "",
    },
]

const gal2 = [
    {
        imglink: "/athletic-10.png",
        title: "",
        describe: "My journey with Badminton Ams Club started when I was in grade 9, joining the club as a member.",
        link: "",
    }, {
        imglink: "/athletic-11.png",
        title: "",
        describe: "Soon, through many events where I proved myself capable of leadership, I was voted as the President of the Club for the 15th generation",
        link: "",
    }, {
        imglink: "/athletic-12.png",
        title: "",
        describe: "First thing after becoming a President, I organized a tryout session, where we invited National Athletes to cast our applicants",
        link: "",
    }, {
        imglink: "/athletic-38.jpg",
        title: "",
        describe: "Our first meeting, where we got to do some icebreakers and bonding.",
        link: "",
    }, {
        imglink: "/athletic-14.png",
        title: "",
        describe: "Our first practice happened shortly after. This was the first time members got to paired with one another, practicing and showing their passion for the sport",
        link: "",
    }, {
        imglink: "/athletic-15.png",
        title: "",
        describe: "Monthly, we hosted an exchange program with a high school in Hanoi. This is an exchange session with BED - Badminton Enthusiast of Dong Da, where we organized a mini-tournament between the 2 clubs",
        link: "",
    }, {
        imglink: "/athletic-16.png",
        title: "",
        describe: "Soon, we organized our first big tournament - Spring Mini Tournament. Gathering 5 high schools with more than 100 athletes from gifted schools around Hanoi, the tournament is an opportunity for clubs to network",
        link: "",
    }, {
        imglink: "/athletic-17.png",
        title: "",
        describe: "Our final practice in this generation, where we had the generation-showdown match, a proper goodbye and ending for the generation",
        link: "",
    }, {
        imglink: "/athletic-18.png",
        title: "",
        describe: "And to prepare the next generation’s recruit, we set up booth at Hanoi-Amsterdam Highschool for the Gifted for 2 consecutive years (2024 & 2025)",
        link: "",
    }, {
        imglink: "/athletic-19.png",
        title: "",
        describe: "At the booth, we set up a full-size badminton court, allowing passerby to visit and had some rallies with our club members, and also introduce our club",
        link: "",
    }, {
        imglink: "/athletic-20.png",
        title: "",
        describe: "At the end of the generation, I organized a 2-days trip for the club, where we could celebrate a successful journey, look back, and plan for the next generation",
        link: "",
    },
]


const gal3 = [
    {
        imglink: "/athletic-41.png",
        title: "",
        describe: "Summer 2024 marked my first achievement in tournaments' organization. From becoming the Vice-Organizer of Hanoi's largest student-based tournament to the Head Organizer of Checkmate Master - a tournament for international kids in my community, the experience gave me a lot of exposure to organizing.",
        link: "",
    }, {
        imglink: "/athletic-40.png",
        title: "",
        describe: "Soon, as I had proved myself through countless leadership positions and also as a trustworthy organizer, I was voted as the Vice President of Ams Chess Academy (ACA) - Hanoi's Largest chess club Together with our core team of 8 people, we supported each other through the 9th generation, where ACA became most successful",
        link: "",
    }, {
        imglink: "/athletic-23.png",
        title: "",
        describe: "Our first meeting, where we got to do some icebreakers and bonding.",
        link: "",
    }, {
        imglink: "/athletic-24.png",
        title: "",
        describe: "On the 40th anniversary of Hanoi - Amsterdam Highschool for the Gifted, our club was 1 of the 8 clubs that were invited to the event. The booth attracted 1000+ visitors, and it was tiring playing against all of them. (It was entertaining though! ",
        link: "",
    }, {
        imglink: "/athletic-25.png",
        title: "",
        describe: "Together, our Logistics Department bonded closely. Through countless meetings, hotpots, chattings, and training, the kids in my department became capable of leading, organizing and preparing facilities. What's most important, our department sees one another as a family member, sharing stories, secrets.",
        link: "",
    }, {
        imglink: "/athletic-26.png",
        title: "",
        describe: "After countless trainings, we stepped into our biggest event - Hanoi Chess Tournament (200+ athletes citywide). Members were finally shining, negotiating facilities at half of its original price, or even requesting sponsorship",
        link: "",
    }, {
        imglink: "/athletic-27.png",
        title: "",
        describe: "See all those tables!! We got sponsored for free, all 200 of them!!",
        link: "",
    }, {
        imglink: "/athletic-28.png",
        title: "",
        describe: "I initiated the Chess Tour events, where we would travel across Hanoi, collaborating with 4 schools to organize tournament and chess events for secondary students.",
        link: "",
    }, {
        imglink: "/athletic-29.png",
        title: "",
        describe: "Our first Chess Tour, where I had to wake up at 4AM just to drive 30km across Hanoi in the freezing winter of Hanoi !!!",
        link: "",
    }, {
        imglink: "/athletic-30.png",
        title: "",
        describe: "Together, after countless tournaments and events. I decided, it is time I gave back to the community of chess players: organizing chess classes for kids in my area. I was lucky to be accompanied with kids internationally.",
        link: "",
    }, {
        imglink: "/athletic-43.png",
        title: "",
        describe: "Hajun, a highly talented Korean boy. I was lucky enough to be teaching him chess. He is 1000 in Elo now!!",
        link: "",
    },
]

const gal4 = [
    {
        imglink: "/athletic-32.png",
        title: "",
        describe: "ABC’24, I was the Head of Human resources. Shocked to find out how older generations had been sending mails manually. Guess I would have to automate the process with Python then.",
        link: "",
    }, {
        imglink: "/athletic-33.png",
        title: "",
        describe: "Welcome back to ABC’2025, where I took the risk and made the tournament national. 712 athletes from 10 provinces, $5000 in total organizing costs. It’s gonna be a long tournament.",
        link: "https://daibieunhandan.vn/hon-700-hoc-sinh-tham-du-giai-the-thao-ams-badminton-championship-2025-10380425.html?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo&fbclid=IwY2xjawNGD5RleHRuA2FlbQIxMQABHuTfLT4CVHHlyZi43Qc9HP0moJBfPFsdsUmQs0yI1MKHn4XDg5hHs4MnvhwS_aem_fsV00h-2cnoQwdWANggOKA",
    }, {
        imglink: "/athletic-34.png",
        title: "",
        describe: "Of course, it is quite busy as the Head - Organizer, you know.",
        link: "",
    }, {
        imglink: "/athletic-35.png",
        title: "",
        describe: "Getting sick straight out of day 2. Who could know how hot it would be in there?",
        link: "",
    }, {
        imglink: "/athletic-36.png",
        title: "",
        describe: "Appreciate my fellow countrymen who had travelled hundreds of kilometers to join the tournament!",
        link: "",
    }, {
        imglink: "/athletic-45.png",
        title: "",
        describe: "Thanks members of the  organizing committee, the tournament would not have been so successful without your contributions.",
        link: "",
    },
]

export default function Athletic() {
    const [active, setActive] = useState<string | null>(null)

    const handleClick = (key: string) => {
        setActive(active === key ? null : key)
    }
    return (
        <div className="w-full p-23 relative text-[#065A4C] font-[Abhaya_Libre] text-[28px] text-justify">
            <div className="relative z-1">
                <Image src={'/athletic-bg-1.png'} alt="" width={1256} height={728} ></Image>
                <div className=" p-14 rounded-2xl relative -top-20 h-112 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]">

                    <div className="relative z-1 text-[#065A4C] text-[28px] text-justify font-[Abhaya_Libre]">
                        Step into the thrilling odyssey of Phan Hoang Lam, where a burning zeal for sports sparks a fearless drive to uplift through athletic passion. From spearheading the Capital Swimming and Diving Club in 2024 to launching &#34;Ams Badminton Championship&#34; badminton tournament - the nation&#39;s largest student tournament, his spirit soars with every leadership stride. With each dive into training, community games, and rallying youth - igniting strength in peers and rural hearts - this saga pulses with vigor, weaving athletic fervor into a radiant legacy of unity and inspiration.

                    </div>
                </div>
            </div>

            <div className={`-space-y-20 -mt-40 ${active ? '' : "*:hover:scale-105"}`}>
                <div className={`relative ${active === 'a' ? "h-[1600]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('a')}>
                        <div className="text-[63px] font-[Judson] font-bold text-left">
                            Capital Swimming and Diving Club
                        </div>
                        <div className={`${active === 'a' ? 'block' : 'hidden'}`}>
                            8 years, 8 years of competitive swimming. Who could have imagined that the young swimmer who once struggled to catch a breath after 100 meters would become the club’s first to conquer a 10km swim? This is the story of me and the water – a journey of persistence, transformation, and the quiet mastery of every stroke

                            <Gallery items={gal1} />

                            <div className="flex items-center justify-center">
                                {/* <Image src={'/athletic-9.png'} alt="" width={747} height={444}></Image> */}
                                <iframe width="747" height="444" src="https://www.youtube.com/embed/ocdOPRpUobY?si=k4zsf87LmY3OH276" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl shadow-lg"></iframe>
                            </div>
                            <div className="text-center mt-10 w-2/3 mx-auto">
                                A simple 4km open water-swim at Bai Tu Long Bay. Have you ever swum between rocks and cliffs? I have.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`relative ${active === 'b' ? "h-[960]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('b')}>
                        <div className="text-[63px] font-[Judson] font-bold text-left">
                            Badminton Ams Club
                        </div>
                        <div className={`${active === 'b' ? 'block' : 'hidden'}`}>
                            <Gallery items={gal2} />

                            <div className="font-[Judson] text-[36px] font-bold text-center w-2/3 mx-auto">
                                &#34; If the end of a generation leaves you sad,
                                it’s only because its story was beautiful&#34;
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'c' ? "h-[1140]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('c')}>
                        <div className="text-[63px] font-[Judson] font-bold text-left">
                            Hanoi Chess Hub & Ams Chess Academy
                        </div>
                        <div className={`${active === 'c' ? 'block' : 'hidden'}`}>
                            <div className="my-10">
                                “Best Vice President ever in all 10 generations of Ams Chess Academy, the one and only Phan Hoang Lam”
                            </div>
                            <Gallery items={gal3} />
                            <div className="font-[Judson] text-[36px] font-bold text-center  mx-auto">
                                &#34;There is always the depart in a department after all&#34;
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'd' ? "h-[1140]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('d')}>
                        <div className="text-[63px] font-[Judson] font-bold text-left">
                            Ams Badminton Championship
                        </div>
                        <div className={`${active === 'd' ? 'block' : 'hidden'}`}>
                            <div>
                                Ams Badminton Championship (ABC), should I say more?
                                <ul className="ml-10 list-disc">
                                    <li>ABC’24 - Hanoi’s largest student-based championship</li>
                                    <li>ABC’25 - Vietnam’s largest student-based championship</li>
                                </ul>
                                Thanks to all my members and volunteers who have contributed to this journey of mine!
                                <Gallery items={gal4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/mystory-bg-2.png'} alt="" width={1600} height={900} className="absolute bottom-0 left-0 z-0"></Image>
        </div>
    )
}