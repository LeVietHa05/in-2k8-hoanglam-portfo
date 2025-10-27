import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[961px] w-full">
      <Image src={'/home-bg-4.png'} alt=" " fill></Image>
      <Image src={'/home-bg-3.png'} className="absolute z-2 right-0 top-45 h-169" alt=" " width={809} height={676}></Image>
      <Image src={'/home-bg-2.png'} className="absolute z-2 right-20 bottom-0" alt=" " width={1029} height={500}></Image>
      <Image src={'/home-bg-1.png'} className="absolute z-2 left-0 bottom-0" alt=" " width={666} height={465}></Image>
      <Image src={'/home-bg-5.png'} className="absolute z-1 right-0 top-0" alt=" " width={671} height={285}></Image>
      <Image src={'/home-bg-6.png'} className="absolute z-1 left-0 bottom-0" alt=" " width={1440} height={465}></Image>
      <div className="relative z-3 text-[#FFFCB1] font-[Judson] top-20 left-20">
        <div className="text-[47px]">Welcom to my Portfolio</div>
        <div className="text-[153px]">Hoang Lam</div>
        <div className="text-white text-[24px]">“A leader with purpose, a scholar in depth,<br></br>
          an athlete in discipline, and a son of the soil at heart.
        </div>
      </div>
    </div>
  );
}
