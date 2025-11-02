"use client";

import Link from "next/link";
import { outfit, redHatDisplay } from "@/app/fonts";
import { HyperText } from "./ui/hyper-text";


export default function Header() {
    return (
        <header className="flex w-full z-10 flex-row items-center justify-between pt-10">
            {/* Left Section: Name */}
            <div className="flex flex-row items-center space-x-4">
                <Link href="/">
                    <HyperText className={`${outfit.className} name text-3xl font-bold cursor-pointer`} animateOnHover={false}>Anthony Ham</HyperText>
                    {/* <span className={`${outfit.className} name text-3xl font-bold cursor-pointer`}>Anthony Ham</span> */}
                </Link>
            </div>

            {/* Right Section: Links */}
            <div className="flex flex-row items-center space-x-5">
                {/* <Link href="/writing">
          <span className="cursor-pointer">Writing</span>
        </Link> */}

                {/* Social Icons */}
                <div className="flex flex-row items-center space-x-2">
                    <a
                        href="https://twitter.com/asixham"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="cursor-pointer">
                            <img src="https://calix.dev/icons/twitter.svg" alt="Twitter" className="w-4" />
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/xnthiny"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="cursor-pointer">
                            <img src="https://calix.dev/icons/linkedin.svg" alt="LinkedIn" className="w-4" />
                        </span>
                    </a>

                    <a
                        href="https://anthonymham.com/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="cursor-pointer">
                            <img src="https://www.svgrepo.com/show/532167/document-layout-right.svg" alt="LinkedIn" className="w-4" />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}