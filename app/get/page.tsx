"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Platform = "ios" | "android" | "rustore" | "unknown"

const stores = {
  // ios: {
  //   name: "App Store",
  //   icon: "/apple.svg",
  //   url: "https://apps.apple.com/app/smartword",
  //   description: "Загрузить в App Store",
  // },
  // android: {
  //   name: "Google Play",
  //   icon: "/googleplay.svg",
  //   url: "https://play.google.com/store/apps/details?id=com.smartword",
  //   description: "Доступно в Google Play",
  // },
  rustore: {
    name: "RuStore",
    icon: "/rustore.svg",
    url: "https://www.rustore.ru/catalog/app/ru.smartword.app",
    description: "Скачать из RuStore",
  },
}

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "unknown"
  
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Check for iOS
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return "ios"
  }
  
  // Check for Android
  if (/android/.test(userAgent)) {
    // Could add RuStore detection based on locale/region if needed
    return "android"
  }
  
  return "unknown"
}

export default function SmartLinkPage() {
  const [platform, setPlatform] = useState<Platform>("unknown")
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    const detected = detectPlatform()
    setPlatform(detected)

    // Auto-redirect after a short delay if platform is detected
    if (detected !== "unknown") {
      setIsRedirecting(true)
      const timer = setTimeout(() => {
        window.location.href = stores[detected].url
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleManualRedirect = (store: keyof typeof stores) => {
    window.location.href = stores[store].url
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8 inline-flex"
        >
          <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
            <span className="text-4xl font-bold text-white">S</span>
          </div>
        </motion.div>

        <h1 className="text-3xl font-bold mb-4">SmartWord</h1>
        
        {isRedirecting && platform !== "unknown" ? (
          <>
            <p className="text-muted-foreground mb-6">
              Перенаправляем в {stores[platform].name}...
            </p>
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Не перенаправляет?{" "}
              <button
                onClick={() => handleManualRedirect(platform)}
                className="text-primary hover:underline"
              >
                Нажмите здесь
              </button>
            </p>
          </>
        ) : (
          <>
            <p className="text-muted-foreground mb-8">
              Выберите магазин для загрузки SmartWord
            </p>

            <div className="flex flex-col gap-3">
              {Object.entries(stores).map(([key, store]) => (
                <Button
                  key={key}
                  variant="outline"
                  onClick={() => handleManualRedirect(key as keyof typeof stores)}
                  className="h-16 px-6 rounded-2xl glass-strong border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 w-full">
                    <Image
                      src={store.icon}
                      alt={store.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 dark:invert"
                      style={{ filter: "brightness(0)" }}
                    />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">{store.description}</p>
                      <p className="text-base font-semibold">{store.name}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </>
        )}

        {/* Device info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Smartphone className="h-4 w-4" />
          <span>
            {platform === "unknown" 
              ? "Устройство не определено" 
              : `Определено: ${platform === "ios" ? "iOS" : platform === "android" ? "Android" : "RuStore"}`
            }
          </span>
        </motion.div>
      </motion.div>
    </main>
  )
}
