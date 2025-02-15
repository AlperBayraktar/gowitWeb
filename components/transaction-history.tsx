"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function TransactionHistory() {
  const transactions = [
    {
      date: "3 Jul",
      time: "09:40",
      card: "VISA ●●●● 9556",
      amount: "$ 125.00",
      status: "successful",
    },
    {
      date: "3 Jul",
      time: "09:40",
      card: "MC ●●●● 6400",
      amount: "$ 250.00",
      status: "successful",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <h4 className="text-lg font-semibold mb-4">Transaction History</h4>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div className="flex gap-4">
                <div className="text-sm text-muted-foreground">
                  <div>{transaction.date}</div>
                  <div>{transaction.time}</div>
                </div>
                <div className="text-sm font-medium">{transaction.card}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">{transaction.amount}</span>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Check className="h-4 w-4" />
                  Transaction {transaction.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          Continue
        </Button>
      </Card>
    </motion.div>
  )
}

