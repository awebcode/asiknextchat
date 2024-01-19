"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { buttonTapAnimation } from "@/constants/animations";
const Chat = () => {
  return (
    <div className="py-20 px-4 dark:gradient-radial">
      <div className="container px-2 lg:px-12 flex justify-between items-center relative">
        {/* left */}
        <div className="py-36 animate-pulse flex flex-wrap lg:flex-nowrap justify-between items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: -90, x: -140 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="flex  flex-col gap-4 p-2 lg:p-6 lg:px-10"
          >
            <motion.h1 className="text-5xl lg:text-8xl font-bold">Chat With Us</motion.h1>
            <motion.p className="text-sm leading-6 text-zinc-900 dark:text-zinc-100 tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus
              expedita culpa cum voluptatem repudiandae natus, praesentium consequuntur
              neque perferendis pariatur nam, tempora porro impedit itaque recusandae
              numquam accusantium? Quam.
            </motion.p>
            <motion.button
              whileTap={buttonTapAnimation}
              className="btn bg-purple-500 hover:bg-purple-600 duration-300"
            >
              Join Chat
            </motion.button>
          </motion.div>
          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: -390, x: -140 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.7,
              type: "spring",
              stiffness: 300,
            }}
            className="px-10 animate-pulse"
          >
            <Image
              alt="heroImage"
              src={"/images/hero.svg"}
              height={1000}
              width={1000}
              layout="responsive"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
