"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/navigation/navigation-menu"
import { TransactionHistory } from "@/pages/transaction-history"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <NavigationMenu />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                Future of
                <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  {" "}
                  Payments
                </span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience seamless transactions with our next-generation payment platform. Fast, secure, and
                effortless.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" className="h-12 px-6">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-12 lg:grid-cols-2"
            >
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold">BENEFITS</h2>
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">Instant payments</h3>
                    <p className="text-muted-foreground">
                      Receive money in seconds. Real-time transactions revolutionize domestic financial operations.
                    </p>
                  </motion.div>
                  <TransactionHistory />
                </div>
              </div>

              <div className="lg:pl-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                    <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1wK1lF6eLU56DrRIKgb4CNXsSUvKL.png"
                        alt="Platform Integration"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-black text-white p-6"
                  >
                    <h3 className="text-2xl font-semibold mb-4">Platform</h3>
                    <p>
                      leverages DLT technology to ensure <span className="text-blue-400">transparency</span> of every
                      transaction
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </main>
    </div>
  )
}

