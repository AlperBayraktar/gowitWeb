"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { NavigationMenu } from "@/navigation/navigation-menu"
import { AppShowcase } from "./app-showcase"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <NavigationMenu />

      <main className="flex-grow text-center">
        {/* Hero Section */}
        <section className="mt-72 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
                Discover Hidden Gems,
                <span className="bg-gradient-to-r from-primary to-green-600 text-transparent bg-clip-text">
                  {" "}
                  Travel Smarter!
                </span>
              </h1>
              <p className="mt-8 text-2xl text-muted-foreground max-w-2xl mx-auto">
                Turkey's First Web3 Based Tourism Platform
              </p>
            </motion.div>
          </div>
        </section>

        {/* App Showcase Section */}
        <div className="mt-80 flex justify-center gap-4">
          <AppShowcase />
        </div>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-8 lg:grid-cols-2"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-left">GOWIT</h2>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-semibold mb-2 text-left">Features</h3>
                    <ul className="text-left text-xl space-y-2">
                      <li className="text-muted-foreground">• AI-Powered Travel Recommendations</li>
                      <li className="text-muted-foreground">• NFT & Web3 Integration</li>
                      <li className="text-muted-foreground">• Partnerships with Local Businesses</li>
                      <li className="text-muted-foreground">• Real Traveler Reviews & Experiences</li>
                    </ul>
                  </motion.div>
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
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                    <h3 className="text-3xl font-semibold mb-4">Mission & Vision</h3>
                    <div className="relative">
                      <p className="text-xl leading-relaxed">
                        "Gowit aims to transform travel by leveraging Web3 and NFT technologies, encouraging tourists to
                        explore lesser-known destinations while supporting local economies."
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-black text-white p-8"
                  >
                    <h3 className="text-3xl font-semibold mb-4">How It Works</h3>
                    <p className="text-xl">Discover | NFT-Powered Travel | Community & Engagement</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog / News Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-left">Blog / News</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left text-xl space-y-4">
                    <li className="text-muted-foreground">• Travel Tips & Guides</li>
                    <li className="text-muted-foreground">• The Future of Travel with NFT & Web3</li>
                    <li className="text-muted-foreground">• Stories from the Gowit Community</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-left">Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left text-xl space-y-4">
                    <li className="text-muted-foreground">• Benefits for Local Businesses</li>
                    <li className="text-muted-foreground">• Sponsorship & Investor Relations</li>
                  </ul>
                </CardContent>
              </Card>
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

