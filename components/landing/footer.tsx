"use client"

import { motion } from "framer-motion"

const footerLinks = {
  "Продукт": [
    { label: "Возможности", href: "#features" },
    { label: "Тренировки", href: "#training" },
    { label: "Lexi", href: "#lexi" },
    { label: "Тарифы", href: "#" },
  ],
  "Ресурсы": [
    { label: "FAQ", href: "#" },
    { label: "Поддержка", href: "mailto:hello@smart-word.ru" },
  ],
  "Документы": [
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Условия использования", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#"
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="relative h-10 w-10 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/logo.png"
                  alt="SmartWord"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-semibold">SmartWord</span>
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Самый эффективный способ учить и запоминать новые слова навсегда с помощью ИИ.
            </p>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-3">
              {footerLinks["Продукт"].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-3">
              {footerLinks["Ресурсы"].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Legal & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
              <p>{new Date().getFullYear()} SmartWord. Все права защищены.</p>
              <span className="hidden sm:inline">•</span>
              <p>ИП Сейитаммедов Д. Г.</p>
            </div>
            
            {/* Documents & Email */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Условия использования
                </a>
              </div>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a href="mailto:hello@smart-word.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                hello@smart-word.ru
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
