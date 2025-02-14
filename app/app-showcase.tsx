"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AppShowcase() {
  const appScreens = [
    "/photo1.png?height=600&width=300",
    "/photo2.png?height=600&width=300",
    "/photo3.png?height=600&width=300",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:block text-6xl lg:text-7xl font-bold text-gray-800 transform -rotate-90 origin-center"
          >
            Go
          </motion.div>

          {/* App Screens */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center items-center gap-4 md:gap-8"
          >
            {appScreens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-[200px] h-[400px] md:w-[250px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={screen || "/placeholder.svg"}
                  alt={`App Screen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:block text-6xl lg:text-7xl font-bold text-gray-800 transform rotate-90 origin-center"
          >
            wit
          </motion.div>
        </div>
      </div>
    </section>
  )
}

