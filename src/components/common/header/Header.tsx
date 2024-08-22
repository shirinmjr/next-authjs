"use client";
import { Link } from "react-scroll";
import NextLink from "next/link";
// import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Image from "next/image";
import { headerData } from "./headerData";

const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className="fixed z-50 w-full top-0 left-0 bg-white text-black font-source-sans-3 shadow-md py-[20px] px-[10px] min-h-[50px]">
        <div className="flex flex-wrap items-center justify-between relative bg-white text-black gap-5">
          <a href="/" className="block">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* <Image
                src={AtlasLogo}
                className="atlas-logo"
                alt="Atlas Logo"
                width={170}
                height={80}
                priority
              /> */}
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              {/* <Image
                src={LogoOnly}
                className="atlas-logo"
                alt="Atlas Logo"
                width={36}
                height={36}
                priority
              /> */}
            </Box>
          </a>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="pl-[10px]">
              <Box sx={{ display: { sm: "none", md: "block flex " } }}>
                {pathname === "/" &&
                  headerData.map((item, index) => {
                    return (
                      <li key={index}>
                        {/* <Link
                          href={item.href}
                          smooth={true}
                          duration={800}
                          // onClick={() => {
                          //   scrollToSection(item.ref);
                          // }}
                          className={
                            "text-gray-800 lg:hover:text-[#007bff] block py-[10px] px-[20px] text-[16px] leading-[24px]"
                          }
                        > */}
                        {item.title}
                        {/* </Link> */}
                      </li>
                    );
                  })}
                {pathname != "/" && (
                  <li>
                    <NextLink
                      href={"/"}
                      className={
                        "text-gray-800 lg:hover:text-[#007bff] block py-[10px] px-[20px] text-[16px] leading-[24px]"
                      }
                    >
                      Home
                    </NextLink>
                  </li>
                )}
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
