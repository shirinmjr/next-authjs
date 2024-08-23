"use client";
import React from "react";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { footerNavData } from "./footerNavData";
import { footerSocial } from "./footerSocial";
import Newsletter from "./Newsletter";

export default function Footer({}) {
  const pathname = usePathname();

  return (
    <div
      id="footer"
      className="min-w-full border-gray-800"
      style={{ backgroundColor: "rgba(87, 87, 249, 0.75)" }}
    >
      <footer>
        <div className="flex flex-col md:flex-row pl-6 py-10 md:pt-16 md:pl-10 md:py-2  bg-gray-800 font-open-sans">
          {/* col-1 */}
          <div className="flex-1 md:w-39/100 justify-start">
            <div className="flex pb-5">
              <a href="/">
                {/* <Image
                  src={}
                  className=" mb-4"
                  alt=""
                  width={188}
                  height={56}
                  priority
                /> */}
              </a>
            </div>
            <div className="flex flex-col text-[16px] leading-[24px] font-open-sans">
              {/* <h6 data-aos="fade-up" data-aos-delay="0">
                Join our newsletter to stay up to date on features and releases.
              </h6> */}
            </div>
            {/* <div className="mb-12">{<Newsletter />}</div> */}
            <div className="flex sm:pt-0 pt-10">
              <p
                className="mb-10 text-[12px] leading-[18px]"
                data-aos="fade-up"
                data-aos-delay="250"
              ></p>
            </div>
          </div>

          {/*col-2 Only Shows on the Landing-page path='/'*/}
          <div className="lg:flex-1 md:w-30.5/100 text-3xl mb-20 md:ml-5">
            {pathname === "/" && (
              <h6 className=" text-[16px] mb-5 sm:ml-20">Menu</h6>
            )}
            {pathname === "/" &&
              footerNavData.map((data, index) => {
                return (
                  <div className="md:ml-20">
                    <Link
                      key={index}
                      href={data.href}
                      //   duration={800}
                      //   onClick={() => {
                      //     scrollToSection(data.ref);
                      //   }}
                      className="flex justify-start text-center text-[16px] leading-[21px] items-center py-2
                     hover:text-blue-600 transition duration-150 ease-in-out"
                    >
                      {data.title}
                    </Link>
                  </div>
                );
              })}
          </div>

          {/*col-3*/}
          <div className="md:flex-1 md:w-30.5/100 text-3xl mb-20">
            <h6 className="justify-start items-center text-[16px] mb-5">
              Follow Us
            </h6>
            {footerSocial.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.href}
                  className="flex text-[16px] leading-[21px] justify-start items-center py-2
                     hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  <Image
                    src={data.icon}
                    className=""
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />
                  &nbsp;&nbsp;&nbsp;
                  {data.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* ===== Copyrights note ===== */}
        <div className="flex justify-around items-center bg-gray-900 p-2  border-t-2 border-gray-600 w-full">
          <Typography
            m={{ xs: 2, sm: 2, md: 2.5, lg: 3 }}
            maxWidth={{ xs: "50vw", md: "40vw" }}
            sx={{
              fontFamily: "'Harmattan'",
              fontSize: {
                xs: "14px",
                sm: "21px",
                md: "25px",
              },
              fontWeight: "400",
              lineHeight: {
                xs: "21px",
                sm: "31.5px",
                md: "42px",
              },
              textAlign: "center",
            }}
          >
            &copy; shirinmjr All rights reserved.
          </Typography>
          <Typography
            m={{ xs: 2, sm: 2, md: 2.5, lg: 3 }}
            maxWidth={{ xs: "50vw", md: "40vw" }}
            sx={{
              fontFamily: "'Harmattan'",
              fontSize: {
                xs: "14px",
                sm: "21px",
                md: "25px",
              },
              fontWeight: "400",
              lineHeight: {
                xs: "21px",
                sm: "31.5px",
                md: "42px",
              },
              textAlign: "center",
            }}
          ></Typography>
          <Typography
            m={{ xs: 2, sm: 2, md: 2.5, lg: 3 }}
            maxWidth={{ xs: "50vw", md: "40vw" }}
            sx={{
              fontFamily: "'Harmattan'",
              fontSize: {
                xs: "14px",
                sm: "21px",
                md: "25px",
              },
              fontWeight: "400",
              lineHeight: {
                xs: "21px",
                sm: "31.5px",
                md: "42px",
              },
              textAlign: "center",
            }}
          ></Typography>
          <Typography
            m={{ xs: 2, sm: 2, md: 2.5, lg: 3 }}
            maxWidth={{ xs: "50vw", md: "40vw" }}
            sx={{
              fontFamily: "'Harmattan'",
              fontSize: {
                xs: "14px",
                sm: "21px",
                md: "25px",
              },
              fontWeight: "400",
              lineHeight: {
                xs: "21px",
                sm: "31.5px",
                md: "42px",
              },
              textAlign: "center",
            }}
          >
            {/* <Link
              href='/cookies-settings'
              className='hover:text-gray-100 transition duration-150 ease-in-out'
            >
              Cookies Settings
            </Link> */}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
