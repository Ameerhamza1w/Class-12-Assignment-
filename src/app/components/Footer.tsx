import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-[#043873] px-[120px] py-[50px] flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col items-start gap-12">
        <div className="w-full flex justify-between items-start">
          <div className="w-[250px] flex flex-col items-start">
            <Image src="/Logo.png" alt="logo" width={150} height={30} />
            <p className="mt-5 text-white font-normal text-[14px] leading-[28px] tracking-[-2%]">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-start">
            <h4 className="text-white font-bold mb-3">Product</h4>
            <ul className="text-white font-normal text-[14px] leading-[25px] tracking-[-2%]">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
            </ul>
          </div>
          <div className="w-[250px] flex flex-col items-start">
            <h4 className="text-white font-bold mb-3">Resources</h4>
            <ul className="text-white font-normal text-[14px] leading-[25px] tracking-[-2%]">
              <li>Blog</li>
              <li>Guides & Tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="w-[250px] flex flex-col items-start">
            <h4 className="text-white font-bold mb-3">Company</h4>
            <ul className="text-white font-normal text-[14px] leading-[25px] tracking-[-2%]">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-white font-normal text-[14px] leading-[18px] tracking-[-2%]">
            © 2021 Whitepace LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
