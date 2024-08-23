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
      <header className="fixed z-50 w-full top-0 left-0 bg-white text-black shadow-md py-[15px] px-[10px]">
        <div className="flex flex-wrap items-center justify-between relative bg-white text-black gap-5">
          <a href="/" className="flex items-center">
            <Box>
              <Image
                src={OpenLocker}
                className="open-locker-logo"
                alt="open locker logo"
                width={50}
                height={50}
                priority
              />
            </Box>
            {/* <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image
                src={OpenLocker}
                className="open-locker-logo"
                alt="open locker logo"
                width={50}
                height={50}
                priority
              />
            </Box> */}
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
              }}
            >
              Login To Secure Your Environment
            </Box>
          </a>

          <Box>
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
                            "text-gray-800 lg:hover:text-orange-800 block py-[10px] px-[20px] text-[20px] leading-[24px]"
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                <SignOutBtn />
              </Box>
            </ul>
          </Box>
        </div>
      </header>
    </div>
  );
};
export default Header;
