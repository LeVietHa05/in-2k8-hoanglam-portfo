'use client'
import { useState } from "react"
import Image from "next/image"
import Gallery from "../components/gallery"
import Link from "next/link"

const gal1 = [{
    imglink: "/soil-2.png",
    title: "Silver Medal",
    describe: "Led a 3-member team to develop Restorator-Bot, a robot that revitalizes dead lands by collecting debris and removing obstacles.",
    link: "https://www.youtube.com/watch?v=_2tThEfbVnU",
},{
    imglink: "/soil-5.png",
    title: "Gold Medal",
    describe: "Prepare a machine learning dataset for printed circuit board waste classification",
    link: "",
}, {
    imglink: "/soil-6.png",
    title: "Gold Award",
    describe: "Applied AI and computer vision to irrigation management, optimizing water use and crop health.",
    link: "https://www.youtube.com/watch?v=KcPwgelbkKo",
}, {
    imglink: "/soil-7.png",
    title: "Gold Medal",
    describe: "Manipulating photocatalytic reactions to cleanse the contaminated water.",
    link: "https://www.youtube.com/watch?v=Du53xuwsgVc",
},{
    imglink: "/soil-3.png",
    title: "Silver Medal",
    describe: "Developed a dataset containing 2000 images to train a Computer Vision model to classify waste",
    link: "",
}, {
    imglink: "/soil-4.png",
    title: "Gold Medal",
    describe: "LDeveloped an LSTM model forecasting soil moisture trends.",
    link: "https://www.youtube.com/watch?v=lUgG_Kv0j9g",
},]

const per1 = [
    {
        image: "/soil-11.png",
        text: "I joined a collaborative to develop an AI-driven agricultural monitoring device – a fusion of sensors, data, and intelligence designed to help farmers see their fields through the eyes of technology",
        link: ""
    }, {
        image: "/soil-12.png",
        text: "After months in the lab, it was finally time to take my creation to the field. Seeing it in action on real soil made all the experiments worth it",
        link: ""
    }, {
        image: "/soil-13.png",
        text: "After waiting for 2 hours, I returned to the station, collecting the data for the calibration process",
        link: ""
    }, {
        image: "/soil-14.png",
        text: "With Patent No. VN1202501578 officially granted, it is now not only a proof of concept but a patented solution ready to make an impact on soil monitoring and sustainable agriculture",
        link: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202501578"
    },
]

const per2 = [
    {
        imglink: "/soil-15.png",
        title: "",
        describe: "In Vietnam, farmers often rely on manual soil sampling and laboratory analysis – a slow, labor-intensive process that delays critical decisions on irrigation and fertilization.",
        link: ""
    }, {
        imglink: "/soil-16.png",
        title: "",
        describe: "Recognizing this challenge, I sought to automate and accelerate the way we understand the land. I developed a smart monitoring device embedded directly into farmers’ tools, integrating multi-depth sensors.",
        link: ""
    }, {
        imglink: "/soil-17.png",
        title: "",
        describe: "A 300km trip to Ha Tinh to meet Mr. Son, a well known farmer in the area. I introduced the device to him, tested it on his fields, and contemplated to his feedback for further development.",
        link: ""
    }, {
        imglink: "/soil-18.png",
        title: "",
        describe: "A visit to the harbor of Hanoi, where I met Mr.Nam and tested the device on his local farms.",
        link: "https://www.youtube.com/watch?v=yyB33YgY8AU"
    }, {
        imglink: "/soil-21.png",
        title: "",
        describe: "The project’s impact resonated beyond the fields – I was invited to share my journey, inspiration, and the story behind the device in national newspapers and media outlets, where technology and purpose found a voice together.",
        link: "https://en.baoquocte.vn/smart-moisture-measuring-shovel-a-weather-assistant-for-farmers-330581.html"
    }, {
        imglink: "/soil-22.png",
        title: "",
        describe: "After countless refinements born from interviews and field tests, I finalized the device – a fusion of data and earth. I then brought it to the National Science Fair, presenting not just a product, but a vision of how technology can listen to the land and won First  Prize",
        link: ""
    }, {
        imglink: "/soil-23.png",
        title: "",
        describe: "Through two challenging rounds of presentations and evaluations, the project advanced to the national final – where it was honored with the First Prize, a recognition not just of innovation, but of the harmony between science and the soil it serves.",
        link: ""
    },
]

const per3 = [
    {
        imglink: "/soil-57.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-58.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-59.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-60.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-61.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-62.png",
        title: "",
        describe: "",
        link: ""
    }
    // , {
    //     imglink: "/soil-30.png",
    //     title: "",
    //     describe: "",
    //     link: ""
    // }, {
    //     imglink: "/soil-31.png",
    //     title: "",
    //     describe: "",
    //     link: ""
    // }
]

const gal4 = [
    {
        imglink: "/soil-82.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-83.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-84.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-85.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-86.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-87.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-88.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-89.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-90.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-91.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-92.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-93.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-94.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-95.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-96.png",
        title: "",
        describe: "",
        link: ""
    }, {
        imglink: "/soil-97.png",
        title: "",
        describe: "",
        link: ""
    }



]

export default function SoilPage() {
    const [active, setActive] = useState<string | null>(null)

    const handleClick = (key: string) => {
        setActive(active === key ? null : key)
    }
    return (
        <div className="w-full p-23 relative text-[#065A4C] font-[Abhaya_Libre] text-[28px]">
            <div className="relative z-1">
                <Image src={'/soil-55.png'} alt="" width={1256} height={728} ></Image>
                <div className=" p-14 rounded-2xl relative -top-20 h-98">
                    <Image className="h-98" src={'/soil-bg-1.png'} alt="" fill></Image>
                    <div className="relative z-1 text-[#065A4C] text-[28px] text-justify font-[Abhaya_Libre]">
                        This chapter chronicles the inspiring journey of Phan Hoang Lam, a 12th-grade student at Hanoi-Amsterdam High School for the Gifted, as he transforms his passion for mathematics and science into a lifelong commitment to soil and sustainable agriculture.
                    </div>
                </div>
            </div>

            <div className={`-space-y-20 -mt-40 ${active ? '' : "*:hover:scale-105"}`}>
                <div className={`relative ${active === 'a' ? "h-[1160]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <Image className="h-98" src={`${active === 'a' ? '/soil-bg-1`.png' : '/soil-bg-1.png'}`} alt="" fill></Image>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('a')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Achievements
                        </div>
                        <div className={`${active === 'a' ? 'block' : 'hidden'}`}>
                            <div className="text-[28px]">
                                From ages 0 to 5, I lived with my grandparents in Ha Tinh, where each dawn found us in the fields. Watching crops emerge from the soil, I learned that life mirrors the land—nurtured by patience, shaped by care, and rooted in quiet persistence. Over time, I’ve fused that connection with technology to advance sustainable agriculture:
                            </div>
                            <Gallery items={gal1}></Gallery>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'b' ? "h-[2200]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <Image className="h-98" src={`${active === 'b' ? '/soil-bg-2.png' : '/soil-bg-1.png'}`} alt="" fill></Image>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('b')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Research
                        </div>
                        <div className={`${active === 'b' ? 'block' : 'hidden'}`}>
                            <div className="text-[28px]">
                                Exploring where theory meets reality, my research bridges mathematics, computer science, and environmental sustainability – from deep learning frameworks to multimodal data integration – each project a step toward transforming data into understanding and innovation
                            </div>

                            <div className="flex mt-10 gap-8 border-b-2 pb-15">
                                <div className="flex-1" >
                                    <Image src={'/soil-8.png'} alt="" height={605} width={625}></Image>
                                </div>
                                <div className="flex-1 text-[28px] space-y-5">
                                    <div className="text-[32px] font-bold">
                                        Co-author, Yield and Quality Prediction of Crops Using Multimodal Data Integration Framework
                                    </div>
                                    <div >
                                        <b>Published:</b> European Journal of Electrical Engineering and Computer Science
                                    </div>
                                    <div>
                                        I integrated soil, irrigation, and microclimate data into a unified deep learning framework – building visualization pipelines, benchmarking CNN models, and advancing multimodal prediction of crop yield and quality. Where code meets cultivation, I turned data into decisions for sustainable farming.
                                    </div>
                                </div>
                            </div>

                            <div className=" mt-10 border-b-2 pb-15">
                                <div className="flex gap-8">

                                    <div className=" space-y-5 flex-1">
                                        <div className="text-[32px] font-bold">
                                            Increasing Opportunities for Component Reuse on Printed Circuit Boards
                                        </div>
                                        <div >
                                            <b>Published:</b>  International Journal of Environmental Science and Technology - Scopus Q1
                                        </div>

                                    </div>
                                    <div className="flex-1">
                                        <Image src={'/soil-9.png'} alt="" height={350} width={595}></Image>
                                        <div className="text-xs text-center">
                                            https://link.springer.com/article/10.1007/s13762-024-06242-y
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    I led dataset collection and preprocessing, refining the data that powered deep learning models for component reuse prediction. Through this project, I explored how AI can reimagine sustainability – giving new life to electronic waste through intelligent design.
                                </div>
                            </div>

                            <div className=" mt-10 border-b-2 pb-15">
                                <div className="flex gap-8">
                                    <div className="flex-1">
                                        <Image src={'/soil-10.png'} alt="" height={350} width={595}></Image>
                                        <div className="text-xs text-center">
                                            https://link.springer.com/article/10.1007/s00271-024-00949-z
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-5">
                                        <div className="text-[32px] font-bold">
                                            Tomato Irrigation Through Deep Learning-enabled Wireless Sensor Networks
                                        </div>
                                        <div >
                                            <b>Published:</b>  International Journal of Environmental Science and Technology - Scopus Q1
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    I led dataset collection and preprocessing, refining the data that powered deep learning models for component reuse prediction. Through this project, I explored how AI can reimagine sustainability – giving new life to electronic waste through intelligent design.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'c' ? "h-[3870]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>

                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('c')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Personal Product
                        </div>

                        <div className={`${active === 'c' ? 'block' : 'hidden'} space-y-10`}>
                            <div className="text-[28px]">
                                Transforming numbers and lines of code into tangible solutions, I build tools that breathe purpose into data – systems that help farmers read the language of their soil, empower communities, and turn mathematics into quiet acts of change.
                            </div>

                            <div className="space-y-10">
                                <div className="font-bold">
                                    1. AI-Powered Agriculture Monitoring Device
                                </div>
                                <div className="flex gap-4">
                                    {
                                        per1.map((each, i) => {
                                            return (
                                                <div className="flex-1 text-base" key={i}>
                                                    <Image src={each.image} alt="" width={277} height={190}></Image>
                                                    {each.text} {each.link && (
                                                    <Link
                                                        href={each.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-bold text-[#065A4C] hover:underline"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        [View in here]
                                                    </Link>
                                                    )}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="font-bold">
                                    2. Agriculture Monitoring Device Integrated on Farmer’s tool
                                </div>
                                <Gallery items={per2} />
                            </div>

                            <div className="space-y-10">
                                <div className="font-bold">
                                    3. SoilNet
                                </div>
                                <Link
                                href="https://github.com/gitLamHoang/SoilNet--Classifying_Soil_Texture"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-3"
                                >
                                <span
                                    style={{
                                    color: '#065A4C',
                                    textAlign: 'justify',
                                    fontFamily: 'Abhaya Libre',
                                    fontSize: '28px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '36px',
                                    textDecorationLine: 'underline',
                                    textDecorationStyle: 'solid',
                                    textDecorationSkipInk: 'auto',
                                    textDecorationThickness: 'auto',
                                    textUnderlineOffset: 'auto',
                                    textUnderlinePosition: 'from-font',
                                    }}
                                >
                                    GitHub:
                                </span>

                                <div className="w-[53px] h-[53px] bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
                                    <Image
                                    src="/github.png"
                                    alt="GitHub Repository"
                                    width={47}
                                    height={47}
                                    className="rounded-full"
                                    />
                                </div>
                                </Link>

                                <div className="flex">
                                    <Image src={'/soil-19.png'} alt="" width={396} height={205}></Image>
                                    <Image src={'/soil-99.png'} alt="" width={726} height={205}></Image>
                                </div>
                                <p>
                                    My journey with SoilNet began when I met my mentor Majid Mahzoon, PhD at Carnegie Mellon University where I dove deep into the roots of neural networks – the mathematics, the operations, and the algorithms that breathe logic into learning.
                                </p>
                                <p>After grasping the essence of the Multi-Layer Perceptron – the simplest yet most profound architecture of neural networks, I began shaping an idea: using AI to classify soil textures. Majid then guided me toward Convolutional Neural Networks, models crafted for images, and this marked the beginning of my Deep Learning journey.</p>
                                <Gallery items={per3} />
                                <div className="flex gap-8">
                                    <div className="flex-3">
                                        <Image src={'/soil-32.png'} alt="" width={431} height={331}></Image>
                                    </div>
                                    <div className="flex-4 text-justify">
                                        Then, I customized a Convolutional Neural Network – what I proudly called the SoilNet model. After consulting Majid for guidance on hyperparameter tuning, I refined its architecture until it reached a remarkable 99.46% accuracy, a testament to precision born from curiosity and iteration.
                                    </div>
                                </div>
                                <div>
                                    <Image src={'/soil-33.png'} alt="" width={1142} height={500}></Image>
                                </div>
                                <div>
                                    Building on that success, I hosted an international webinar featuring speakers from MIT and Johns Hopkins University, bringing together over a hundred participants to explore the harmony between AI and agriculture – a conversation where technology met the timeless rhythm of the earth. The webinar gathered 100 people, both domestic and international.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'd' ? "h-[2890]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('d')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Community
                        </div>
                        <div className={`${active === 'd' ? 'block' : 'hidden'} space-y-10`}>
                            <div className="text-[28px]">
                                In 2023, I founded Resoil, a non-profit project driven by the desire to restore and improve agricultural land for Vietnamese farmers, while simultaneously igniting the fire of knowledge for students across Southeast Asia. It was the moment I realized that the Mathematical and Scientific knowledge which once fueled my personal passion could now become the energy to regenerate life itself.
                            </div>
                            <Image src={'/soil-66.png'} alt="" width={1245} height={381}></Image>
                            <div className="pb-10 border-b-2">
                                With a core team of eight members, I organized weekly training sessions on soil restoration, agricultural sensors, and environmental data analysis. Furthermore, we collaborated monthly with five experts from the Vietnam National University of Agriculture to conduct in-depth research on microorganisms, IoT technology, and sustainable solutions.
                            </div>
                            <div>
                                ReSoil took me to many places, gave me opportunities to work directly with local authorities, farmers to interview and work with them on the local soil quality and agriculture-related problems.
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <iframe width="556" height="316" src="https://www.youtube.com/embed/YXZkYKfDA-c" title="[ReSoil] Phỏng vấn Bác nông dân về nhu cầu ứng dụng AI trong Nông nghiệp" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <div className="text-justify">An interview with Ms. Hao, a local farmer at Nghe An Province, where I spent a day gathering soil sample and crops with her</div>
                                </div>
                                <div>
                                    <Image src={'/soil-36.png'} alt=" " width="556" height="316"></Image>
                                    <div className="text-justify">This is me, with Mr. Manh, Agriculture expert at Ha Tinh Province. He shared with me his view on the policy to support agriculture.</div>
                                </div>
                                <div>
                                    <iframe width="556" height="316" src="https://www.youtube.com/embed/Tevtvt98vPM" title="[ReSoil] Phỏng vấn Bác nông dân về nhu cầu ứng dụng AI trong Nông nghiệp" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <div className="text-justify">A trip to Nam Dinh Province, where Resoil members help Mr. Son harvested his crops and interviewed him about the recent harvests and agricultural practices in the area</div>
                                </div>
                                <div>
                                    <iframe width="556" height="316" src="https://www.youtube.com/embed/FJXMrHXHKHE" title="[ReSoil] Phỏng vấn Bác nông dân về nhu cầu ứng dụng AI trong Nông nghiệp" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <div className="text-justify">A visit to the quiet border of Cao Bang, where I meet Mr. Linh, Commune&apos;s Vice President and had a quick interview with him on the soil quality of Vietnam&apos;s border</div>
                                </div>
                                <div>
                                    <div className="flex gap-5">
                                        <iframe width="263" height="465" src="https://www.youtube.com/embed/8A6Tq0ag3q0" title="[ReSoil] Cùng giữ ẩm đất nhé các bạn!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                        <iframe width="263" height="465" src="https://www.youtube.com/embed/2SaY7gWI_As" title="[ReSoil] Cùng giữ ẩm đất nhé các bạn!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div>A short trip to Ninh Binh, where I filmed short videos to guide farmers on retaining moisture for crops</div>
                                </div>
                                <div>
                                    <iframe width="556" height="316" src="https://www.youtube.com/embed/_-3RGWD6UoU" title="[ReSoil] Phỏng vấn Bác nông dân về nhu cầu ứng dụng AI trong Nông nghiệp" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'e' ? "h-[2900]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('e')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Internship
                        </div>
                        <div className={`${active === 'e' ? 'block' : 'hidden'} space-y-10`}>
                            <div className="text-[28px]">
                                At the Soils and Fertilizers Institute, under the Ministry of Agriculture and Environment, I immersed myself in the subtle language of the earth – analyzing soil samples, tracking moisture and nutrients, and translating lab data into strategies that nourish the land. This experience merged cutting-edge research with hands-on impact, turning measurements into meaningful action for sustainable agriculture.
                            </div>
                            <div className="flex gap-11 text-justify">
                                <div className="flex-4">
                                    <Image src={'/soil-37.png'} alt="" width={474} height={293}></Image>
                                    <Image src={'/soil-38.png'} alt="" width={474} height={358}></Image>
                                    <div className="pb-6 border-b-2">
                                        Stepping into the Soils and Fertilizers Institute on my first day, I was filled with anticipation and curiosity. The air buzzed with the promise of discovery, and I was eager to immerse myself in the world where science meets soil.
                                    </div>
                                    <Image className="pt-6" src={'/soil-39.png'} alt="" width={474} height={358}></Image>
                                    <div>Another webinar I hosted during my time at Soils and Fertilizer Institute was with MsC Eliot Vas and Professor Pham Quang Ha - Vice President of the Soil Federation of Vietnam. Meeting Eliot helped me learn about the agriculture and soil environment sector in Europe</div>
                                </div>
                                <div className="flex-5">
                                    {/* <iframe width="627" height="354" src="https://www.youtube.com/embed/Ee49N1dFkZ8" title="[ReSoil] ReSoil và hành trình kết nối quốc tế" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                                    {/* <Image src={'/soil-63.png'} alt="" width={627} height={354}></Image> */}
                                    <iframe width="627" height="354" src="https://www.youtube.com/embed/2B5EMcx97LE?si=dUHXWcUOMazlL_to" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <div className="pb-6 border-b-2">Stepping into the Soils and Fertilizers Institute on my first day, I was filled with anticipation and curiosity. The air buzzed with the promise of discovery, and I was eager to immerse myself in the world where science meets soil.</div>
                                    <Image className="pt-6" src={'/soil-41.png'} alt="" width={627} height={354}></Image>
                                    {/* <Image src={'/soil-42.png'} alt="" width={627} height={354}></Image> */}
                                    <iframe width="627" height="354" src="https://www.youtube.com/embed/Ow7dkIqaFUA?si=U9Mp9IyGh9bqHbzc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <div>During my Internship at the Soils and Fertilizer Institute, I had the opportunities to host a webinar with Professor Walter Carciochi and Professor Patricio Grassini from Nebraska-Lincoln University, questioning about the plausibility of applying AI in Agriculture.</div>
                                </div>
                            </div>
                            <div>
                                <iframe width="1139" height="610" src="https://www.youtube.com/embed/Ee49N1dFkZ8" title="[ReSoil] ReSoil và hành trình kết nối quốc tế" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            A meeting with Professor Walter Carciochi and Professor Patricio Grassini to work on the Global - K project, focused on analyzing data worldwide.
                        </div>
                    </div>
                </div>

                <div className={`relative ${active === 'f' ? "h-[970]" : "h-[311]"} overflow-hidden transition-all duration-1000 z-1 bg-gradient-to-b from-[#A2C65F] to-[#F0F2A6] rounded-[60px]`}>
                    <div className="relative z-1 px-[67] py-[37] " onClick={() => handleClick('f')}>
                        <div className="text-[89px] font-[Judson] font-bold ">
                            Portfolio
                        </div>
                        <div className={`${active === 'f' ? 'block' : 'hidden'} space-y-10`}>
                            <Gallery items={gal4} itemsPerPage={1}/>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/mystory-bg-2.png'} alt="" width={1600} height={900} className="absolute bottom-0 left-0 z-0"></Image>
        </div >
    )
}