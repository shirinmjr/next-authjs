"use client";

import Link from "next/link";
// import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Image from "next/image";
import { headerData } from "./headerData";
import SignOutBtn from "../SignOutBtn";
import OpenLocker from "@/assets/open-locker.jpg";
import LockedLocker from "@/assets/locked-locker.jpg";

const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className="fixed z-50 w-full top-0 left-0 bg-white text-black shadow-md py-[20px] px-[10px] min-h-[80px]">
        <div className="flex flex-wrap items-center justify-between relative bg-white text-black gap-5">
          <a href="/" className="block">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Image
                src={OpenLocker}
                className="open-locker-logo"
                alt="open locker logo"
                width={90}
                height={50}
                priority
              />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image
                src={OpenLocker}
                className="open-locker-logo"
                alt="open locker logo"
                width={50}
                height={50}
                priority
              />
            </Box>
          </a>
          <Box
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              padding: "16px 0",
            }}
          >
            Login To Secure Your Environment
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="pl-[10px]">
              <Box sx={{ display: { sm: "none", md: "block flex " } }}>
                {pathname === "/" &&
                  headerData.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          // smooth={true}
                          // duration={800}
                          // onClick={() => {
                          //   scrollToSection(item.ref);
                          // }}
                          className={
                            "text-gray-800 lg:hover:text-[#007bff] block py-[10px] px-[20px] text-[23px] leading-[24px]"
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                {pathname != "/" && (
                  <li>
                    <Link
                      href={"/"}
                      className={
                        "text-gray-800 lg:hover:text-[#007bff] block py-[10px] px-[20px] text-[16px] leading-[24px]"
                      }
                    >
                      Home
                    </Link>
                  </li>
                )}
                <SignOutBtn />
              </Box>
            </ul>
          </Box>
          {/* <MobileMenu></MobileMenu> */}
        </div>
      </header>
    </div>
  );
};
export default Header;
