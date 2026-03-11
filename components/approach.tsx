"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Planning & Strategy"
          icon={<MagicButton title="Phase 1" asChild />}
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >

        </Card>

        <Card
          title="Deployment & Progress Update"
          icon={<MagicButton title="Phase 2" asChild />}
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >

        </Card>

        <Card
          title="Development & Launch"
          icon={<MagicButton title="Phase 3" asChild />}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >

        </Card>
      </div>
    </section>
  );
};

import { PinContainer } from "@/components/ui/3d-pin";

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex lg:h-[35rem] w-full items-center justify-center">
      <PinContainer title="Details" href="#">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] h-[30rem] lg:h-[35rem] sm:w-[25rem]"
        >
          <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 h-full w-full"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-20">
            <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
              {icon}
            </div>

            <h2 className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
              {title}
            </h2>

            <p
              className="relative z-10 mt-4 text-center text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
              style={{
                color: "#e4ecff",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
