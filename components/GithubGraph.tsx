"use client";

import { motion } from "motion/react"
import GitHubCalendar from "react-github-calendar";

export default function GithubGraph() {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, delay: 1.9 }}
      className="lg:py-2 react-github-calendar"
    >
      <GitHubCalendar
        username="druxvh"
        blockSize={8}
        fontSize={10}
        blockRadius={10}
        colorScheme={"dark"}
        transformData={(data) => data.filter((x) => x.count > 0)}
        theme={{
          dark: ["#222", "#b5e48c"],
        }}
      />
    </motion.section>
  );
}
