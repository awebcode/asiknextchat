"use client";
import { cardData } from "@/constants/Card";
import React from "react";
import { motion } from "framer-motion";
import { cardAnimation, transition } from "@/constants/animations";
const About = () => {
  return (
    <div className="py-14 dark:gradient-radial">
      <div className="container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: -90, x: -140 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="text-center my-6"
        >
          <h1 className="text-4xl lg:text-6xl">Services</h1>
          <p className="tracking-wider ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  gap-4">
          {cardData.map((card, index) => (
            <motion.div
              //   initial={{ opacity: 0, y: 80 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   transition={{
              //     duration: 0.8 * index,
              //   }}
              initial="hidden"
              whileInView="visible"
              variants={cardAnimation}
              transition={transition(index)}
              key={card.title}
              className="p-8 dark:bg-gray-800 rounded shadow-xl w-full lg:w-80 h-44 lg:h-60  "
            >
              <h1 className="text-2xl lg:text-4xl mb-4">{card.title}</h1>
              <p className="text-sm lg:text-sm tracking-wider leading-6">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
