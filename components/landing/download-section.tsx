"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const stores = [
  {
    name: "App Store",
    subtitle: "Загрузить в",
    icon: "/apple.svg",
    href: "#",
  },
  {
    name: "Google Play",
    subtitle: "Доступно в",
    icon: "/googleplay.svg",
    href: "#",
  },
  {
    name: "RuStore",
    subtitle: "Скачать из",
    icon: "/rustore.svg",
    href: "#",
  },
]

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-7xl h-[450px] -z-10 overflow-hidden">
        <Image
          src="/bg-website.webp"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-gradient-to-r from-primary/25 to-accent/25 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance text-white" style={{ fontSize: 'clamp(1.875rem, 5vw, 50px)' }}>
            Начни изучать языки{" "}
            <span className="text-white">уже сегодня</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white max-w-2xl mx-auto text-pretty">
            Скачай SmartWord бесплатно и открой самый бомбовый способ изучения языков.
          </p>

          {/* Store Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {stores.map((store, index) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  className="h-16 px-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.2)] hover:border-white/50 hover:scale-105 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] transition-all duration-300 w-full sm:w-auto"
                >
                  <a href={store.href} className="flex items-center gap-4">
                    <Image
                      src={store.icon}
                      alt={store.name}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <div className="text-left">
                      <p className="text-xs text-white">{store.subtitle}</p>
                      <p className="text-base font-semibold text-white">{store.name}</p>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
