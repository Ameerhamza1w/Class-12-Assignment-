'use client';
import Image from "next/image";

export function Navbar() {
    return (
        <div className="w-full h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center">
            {/* Logo */}
            <div>
                <Image src="/logo.png" alt="logo" width={191} height={34} />
            </div>

            {/* Navigation Links and Login Button */}
            <div className="flex items-center gap-12 ml-auto">
                <ul className="flex gap-8 text-[18px] font-medium text-white">
                    <li className="cursor-pointer hover:text-[#FFE492]">Products</li>
                    <li className="cursor-pointer hover:text-[#FFE492]">Services</li>
                    <li className="cursor-pointer hover:text-[#FFE492]">Resources</li>
                    <li className="cursor-pointer hover:text-[#FFE492]">Pricing</li>
                </ul>

                {/* Login Button */}
                <button className="py-3 px-6 rounded-md bg-[#FFE492] text-[#043873] font-medium hover:bg-[#FFD85A] transition ml-9">
                    Login
                </button>
            </div>
        </div>
    );
}
