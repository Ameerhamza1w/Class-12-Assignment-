'use client';
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="w-full min-h-[700px] py-16 px-8 bg-[#043873] flex flex-col xl:flex-row justify-around items-center">
            {/* Left Content */}
            <div className="xl:w-1/2 w-full flex flex-col items-center xl:items-start gap-6 xl:gap-8 text-center xl:text-left">
                <h2 className="font-inter font-bold text-[2.5rem] xl:text-[3rem] text-white leading-tight">
                    Get More Done With <br /> Whitepace
                </h2>
                <p className="font-inter font-normal text-white text-[1rem] xl:text-[1.125rem] leading-relaxed">
                    Project management software that enables your teams to <br /> collaborate, plan, analyze, and manage everyday tasks.
                </p>
                <button className="h-[50px] w-[200px] rounded-lg bg-[#4F9CF9] font-inter font-medium text-[16px] xl:text-[18px] text-white hover:bg-[#3D8AE6] transition">
                    Try Whitepace Free
                </button>
            </div>

            {/* Right Image */}
            <div className="mt-8 xl:mt-0 xl:w-1/2 w-full flex justify-center">
                <Image
                    src="/image.png"
                    alt="Hero Image"
                    width={624}
                    height={549}
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
}
