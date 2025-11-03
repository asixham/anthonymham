"use client";

import Link from "next/link";
import { zalandoSansExpanded } from "@/app/fonts";
import { HyperText } from "./ui/hyper-text";
import { Background } from "./background";
import { ThemeToggle } from "./ui/theme-toggle";
import { Twitter, Linkedin, FileText } from "lucide-react";

export default function Header() {
    return (
        <header className="flex w-full z-10 flex-row items-center justify-between pt-15">
            {/* Left Section: Name */}
            <div className="flex flex-row items-center space-x-4">
                <Link href="/">
                    <HyperText className={`${zalandoSansExpanded.className} text-3xl font-bold cursor-pointer`} animateOnHover={true} duration={1000}>Anthony Ham</HyperText>
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
                        aria-label="Twitter"
                        className="outline-none focus:outline-none text-foreground/80 hover:text-foreground"
                    >
                        <Twitter className="w-4 h-4" />
                    </a>

                    <a
                        href="https://linkedin.com/in/xnthiny"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="outline-none focus:outline-none text-foreground/80 hover:text-foreground"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                        href="https://anthonymham.com/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Resume"
                        className="outline-none focus:outline-none text-foreground/80 hover:text-foreground"
                    >
                        <FileText className="w-4 h-4" />
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}