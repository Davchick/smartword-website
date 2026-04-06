"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IPhoneMockup, AppScreenChat } from "./iphone-mockup"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/25 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[130px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Умное обучение</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
              Учи быстрее.{" "}
              <span className="gradient-text">Помни дольше.</span>{" "}
              Говори увереннее.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Создавай личные словари и практикуйся с Lexi — твоим ИИ-собеседником.
              Запоминай то, что действительно интересно именно тебе.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 transition-all text-white border-0 text-base px-8 h-14 shadow-lg shadow-primary/25"
              >
                <a href="#download">
                  Скачать бесплатно
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full glass text-base px-8 h-14 border-primary/20 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <a href="#features" className="flex items-center gap-2">
                  Как это работает?
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <IPhoneMockup>
              <AppScreenChat />
            </IPhoneMockup>
          </div>
        </div>
      </div>
    </section>
  )
}
