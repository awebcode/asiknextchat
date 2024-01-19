"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { buttonTapAnimation } from "@/constants/animations";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
const Header = () => {
  const pathname = usePathname();
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/About",
      name: "About",
    },
    {
      path: "/Contact",
      name: "Contact",
    },
    {
      path: "/Chat",
      name: "Chat",
    },
  ];

  return (
    <div className="top-0 right-0 fixed left-0 ">
      <div className="flex w-full container mx-auto py-2 flex-wrap justify-between items-center ">
        <h2 className="text-2xl lg:text-4xl font-semibold duration-300 ">Chat</h2>
        <ul className="flex justify-between items-center flex-wrap gap-4">
          {links.map((link, index) => {
            return (
              <>
                <Link
                  key={index}
                  className={cn(
                    "text-zinc-800 hover:text-zinc-900 dark:text-white duration-300 transition-all text-sm lg:text-lg",

                    { "text-blue-500 dark:text-blue-400": pathname.startsWith(link.path) }
                  )}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </>
            );
          })}
        </ul>
        <div className="flex">
          {" "}
          <motion.button
            whileTap={buttonTapAnimation}
            className="btn bg-purple-500 hover:bg-purple-600 duration-300 transition-all"
          >
            Join us
          </motion.button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
