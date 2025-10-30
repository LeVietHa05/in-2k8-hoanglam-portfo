'use client'
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation" 

export default function Mystory() {
    const [activesoil, setactivesoil] = useState(false)
    const [activemath, setactivemath] = useState(false)
    const [activeathletic, setactiveathletic] = useState(false)

    const handleSoil = () => {
        setactivesoil(!activesoil)
        setactivemath(false)
        setactiveathletic(false)
    }

    const handleMath = () => {
        setactivesoil(false)
        setactivemath(!activemath)
        setactiveathletic(false)
    }

    const handelAthletic = () => {
        setactivesoil(false)
        setactivemath(false)
        setactiveathletic(!activeathletic)
    }

    
    const router = useRouter()

    const handleGarden = () => {
    setactivesoil(false)
    setactivemath(false)
    setactiveathletic(false)
    router.push("/garden")  // chuyển sang trang garden
    }


    return (
        <div className="w-full p-23 relative">
            <div className="relative z-1">
                <Image src={'/mystory-1.png'} alt="" width={1256} height={728} ></Image>
                <div className=" p-14 rounded-2xl relative -top-20 h-130">
                    <Image className="h-130" src={'/mystory-bg-3.png'} alt="" fill></Image>
                    <div className="relative z-1 text-[#065A4C] text-[28px] w-2/3 text-justify font-[Abhaya_Libre]">
                        &#34;As a child, I simply played with the earth; as I grew, I began to understand its language.
                        The earth taught me about Mathematics - a place where every particle of dust has order, and every harvest is the result of a natural equation.
                        I learned Math directly from the soil, where the rules weren&#39;t in textbooks, but in every seed that knows how to find the light.&#34;
                    </div>
                    <Image src={'/mystory-bg-1.png'} width={501} height={500} alt="" className="absolute -right-10 -bottom-10 "></Image>
                </div>
            </div>
            <div className={`${!activesoil ? 'h-[527px]' : 'h-[1300px]'} relative  -mt-55 overflow-hidden transition-all duration-1000 z-1`}>
                <Image src={`${!activesoil ? '/mystory-bg-4-1.png' : '/mystory-bg-4.png'}`} fill alt="" className="absolute -right-10 -bottom-10 "></Image>
                <div className="relative z-1 px-[69px] py-[25] text-[28px] text-[#065A4C] font-[Abhaya_Libre]">
                    <div className=" pb-10 text-[89px] font-[Judson] font-bold flex" onClick={handleSoil}>
                        <div>
                            Soil Odyssey
                        </div>
                    </div>
                    <div className={`${!activesoil ? 'hidden' : 'block'}`}>
                        Step into the vibrant journey of Phan Hoang Lam, an 12th-grade dreamer at Hanoi-Amsterdam High School, where a blazing passion for math and agriculture ignites a soul-deep mission for soil and agriculture.
                    </div>
                    <div className={`flex my-10 ${!activesoil ? 'hidden' : 'block'}`}>
                        <div className="flex-1"><Image src={'/mystory-2.png'} alt="" width={533} height={347}></Image></div>
                        <div className="flex-1">To understand a country, most people look up to the skyline, the monuments, the superstructure. I look down - not on people, of course, but to the ground itself. Soil has given me a way of seeing: that beneath every surface there is a deeper truth, waiting to be uncovered. And that is the perspective I hope to carry with me into classrooms, research, and the wider world.</div>
                    </div>
                    <div className={`flex my-10 ${!activesoil ? 'hidden' : 'block'}`}>
                        <div className="flex-1">I was born in 2008 into a three-generation family in Northern Vietnam, a place where the land is not just for farming, but is also a part of our spiritual life.
                            My grandfather often used to say, `&#34;The earth has a soul; if you’d only listen, you will understand what it says.`&#34; I was too young then to grasp his meaning.
                        </div>
                        <div className="flex-1"><Image src={'/mystory-3.png'} alt="" width={533} height={347}></Image></div>
                    </div>
                </div>
            </div>

            <div className={`${!activesoil ? "-mt-87" : "-mt-50"} ${!activemath ? "h-[586px]" : "h-[1265px]"} relative overflow-hidden transition-all duration-1000 z-1`}>
                <Image src={`${!activemath ? '/mystory-bg-5-1.png' : '/mystory-bg-5.png'}`} fill alt="" className="absolute -right-10 -bottom-10 "></Image>
                <div className="relative z-1 px-[69px] py-[25] text-[28px] text-[#065A4C] font-[Abhaya_Libre]">
                    <div className=" pb-10 text-[89px] font-[Judson] font-bold justify-end flex" onClick={handleMath}>
                        <div>
                            Applied Mathematics
                        </div>
                    </div>
                    <div className={`${!activemath ? 'hidden' : 'block'}`}>
                        Step into the vibrant journey of Phan Hoang Lam, a 12th-grade visionary at Hanoi-Amsterdam High School, where a lifelong passion for mathematics blossoms into discovery and innovation.
                    </div>
                    <div className={`flex my-10 ${!activemath ? 'hidden' : 'block'}`}>
                        <div className="flex-1"><Image src={'/mystory-4.png'} alt="" width={505} height={413}></Image></div>
                        <div className="flex-1"><Image src={'/mystory-5.png'} alt="" width={505} height={413}></Image></div>
                    </div>
                    <div className={`flex my-10 ${!activemath ? 'hidden' : 'block'}`}>
                        <div className="flex-1">Math has always been my lens to see the world - patterns in chaos, logic in wonder. What began as childhood fascination has grown into algorithms, AI models, and Olympiad dreams. Numbers once on paper now breathe in code and data, shaping how I learn, create, and make sense of everything.
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${activesoil ? '-mt-100' : `${activemath ? "-mt-60" : "-mt-100"}`} ${!activeathletic ? " h-[487px]" : " h-[1030px]"} relative overflow-hidden transition-all duration-1000 z-1`}>
                <Image src={`${!activeathletic ? '/mystory-bg-6-1.png' : '/mystory-bg-6.png'}`} fill alt="" className="absolute -right-10 -bottom-10 "></Image>
                <div className="relative z-1 px-[69px] py-[25] text-[28px] text-[#065A4C] font-[Abhaya_Libre]">
                    <div className=" pb-10 text-[89px] font-[Judson] font-bold flex" onClick={handelAthletic}>
                        <div>
                            Athletic Pioneer
                        </div>
                    </div>
                    <div className={`flex my-10 gap-4 ${!activeathletic ? 'hidden' : 'block'}`}>
                        <div className=""><Image src={'/mystory-6.png'} alt="" width={276} height={367}></Image></div>
                        <div className=""><Image src={'/mystory-7.png'} alt="" width={494} height={367}></Image></div>
                        <div className=""><Image src={'/mystory-8.png'} alt="" width={243} height={367}></Image></div>
                    </div>
                    <div className={`flex my-10 ${!activeathletic ? 'hidden' : 'block'}`}>
                        <div className="flex-1">As a humble storyteller threading memories with care, I lead you beyond the classroom, where I discovered math woven into the fabric of sports: swimming, badminton, and chess. Swimming taught me rhythm and endurance; chess unveiled strategy and foresight; badminton honed my reflexes and balance. I realized - much like in nature - math doesn’t stand alone; it pulses in every motion, in the poise of my body gliding through water, in the precision of a shuttlecock’s strike. Reflecting now, I see my childhood as a sum of simple joys: earth, people, curiosity, and patience. I grew alongside the land, and it grew with me - teaching me to observe, to trust nature’s rhythms, and to move slowly to grasp deeply.

                        </div>
                    </div>
                </div>
            </div>

            <div className={`${!activesoil ? "-mt-87" : "-mt-50"} ${!activemath ? "h-[386px]" : "h-[1000px]"} relative overflow-hidden transition-all duration-1000 z-1`}>
                <Image src={`${!activemath ? '/mystory-bg-5-1.png' : '/mystory-bg-5.png'}`} fill alt="" className="absolute -right-10 -bottom-10 "></Image>
                <div className="relative z-1 px-[69px] py-[25] text-[28px] text-[#065A4C] font-[Abhaya_Libre]">
                    <div className=" pb-10 text-[89px] font-[Judson] font-bold justify-end flex" onClick={handleGarden}>
                        <div>
                            My Little Graden
                        </div>
                    </div>
                </div>
            </div>

            <Image src={'/mystory-bg-2.png'} alt="" width={1600} height={900} className="absolute bottom-0 left-0 z-0"></Image>
        </div>
    )
}