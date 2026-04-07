"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Mail } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-primary/5 to-transparent border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-primary/10 mb-4 sm:mb-6">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Условия использования
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Публичная оферта на оказание услуг мобильного приложения «SmartWord»
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* 1. Общие положения */}
          <Section
            title="1. Общие положения"
            content={
              <>
                <p className="text-sm">
                  Настоящая Оферта является публичным предложением ИП Сейитмаммедов Давут Гелдимырадович 
                  (ИНН 236600208052, ОГРНИП 326237500121501) заключить договор возмездного оказания услуг.
                </p>
                <p className="text-sm mt-2">
                  Договор заключается путём акцепта — нажатия кнопки «Принять» или фактического 
                  использования приложения. Акцепт означает полное согласие со всеми условиями.
                </p>
              </>
            }
          />

          {/* 2. Услуги */}
          <Section
            title="2. Услуги"
            content={
              <ul className="space-y-1 text-sm">
                <li>• Управление словарями и словами</li>
                <li>• Тренировки (карточки, режим письма)</li>
                <li>• AI-чат для общения на изучаемом языке</li>
                <li>• Перевод текста</li>
                <li>• Статистика обучения</li>
              </ul>
            }
          />

          {/* 3. Premium-подписка */}
          <Section
            title="3. Premium-подписка"
            content={
              <>
                <p className="text-sm mb-3">
                  <strong>Premium-подписка</strong> — платная услуга, предоставляющая расширенный
                  функционал приложения SmartWord.
                </p>
                
                <div className="bg-card border border-border rounded-lg p-4 mb-4">
                  <p className="font-medium text-sm mb-2">Premium включает:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Все словари без ограничений</strong> — создавайте сколько угодно тематических подборок слов и фраз</li>
                    <li>• <strong>Неограниченное количество слов</strong> — добавляйте новые слова без лимитов</li>
                    <li>• <strong>Безлимитный AI-чат с Лекси</strong> — практикуйте язык в живом диалоге без счётчика сообщений</li>
                    <li>• <strong>Расширенная статистика</strong> — детальный прогресс обучения и аналитика</li>
                    <li>• <strong>Приоритетная поддержка</strong> — ответы на запросы в приоритетном порядке</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 mb-4">
                  <p className="font-medium text-sm mb-2">Тарифные планы:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Месяц</strong> — 299 ₽ (30 дней полного доступа)</li>
                    <li>• <strong>Полгода</strong> — 1 699 ₽ (6 месяцев, выгоднее помесячной оплаты)</li>
                    <li>• <strong>Год</strong> — 3 169 ₽ (365 дней, лучшая цена)</li>
                  </ul>
                </div>

                <p className="text-sm">
                  <strong>Важно:</strong> Premium-функции активируются сразу после подтверждения оплаты.
                  Доступ к функциям сохраняется в течение всего оплаченного периода.
                </p>
              </>
            }
          />

          {/* 4. Оплата и возврат */}
          <Section
            title="4. Оплата и возврат"
            content={
              <>
                <p className="text-sm mb-3">
                  <strong>Способы оплаты:</strong>
                </p>
                <ul className="text-sm space-y-1 mb-3">
                  <li>• Банковские карты российских банков: Visa, Mastercard, МИР</li>
                  <li>• СБП (Система быстрых платежей)</li>
                  <li>• СберPay (через приложение СберБанк Онлайн)</li>
                  <li>• T-Pay (через приложение Тинькофф)</li>
                </ul>
                
                <p className="text-sm mb-3">
                  <strong>Обработка платежей:</strong> ЮKassa (ИНН 7750005725)
                </p>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="font-medium text-sm mb-2">Возврат средств:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>В течение 14 дней</strong> — полный возврат, если вы не использовали Premium-функции</li>
                    <li>• <strong>После 14 дней</strong> — возврат по усмотрению ИП (рассматривается индивидуально в течение 10 рабочих дней)</li>
                    <li>• <strong>Без возврата</strong> — если Premium-функции были использованы (AI-чат, словари созданы)</li>
                  </ul>
                </div>

                <p className="text-sm">
                  <strong>Для оформления возврата:</strong> напишите на{' '}
                  <a href="mailto:support@smart-word.ru" className="text-primary hover:underline">
                    support@smart-word.ru
                  </a>{' '}
                  с указанием email аккаунта и причины возврата.
                </p>
                <p className="text-sm mt-2">
                  Срок рассмотрения заявки: до 10 рабочих дней.
                </p>
              </>
            }
          />

          {/* 5. ИИ-функции */}
          <Section
            title="5. ⚠️ ИИ-функции"
            content={
              <>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="text-sm">
                    <strong>Важно:</strong> ИИ может генерировать неточную информацию.
                    Не полагайтесь на ИИ-ответы в вопросах, требующих профессиональной экспертизы
                    (медицина, юриспруденция, финансы).
                  </p>
                </div>
                <p className="text-sm">
                  Для работы AI-чата ваши запросы передаются провайдеру <strong>OpenRouter (США)</strong>.
                  Вы даёте согласие на трансграничную передачу данных при регистрации.
                </p>
              </>
            }
          />

          {/* 6. Персональные данные */}
          <Section
            title="6. Персональные данные"
            content={
              <p className="text-sm">
                Акцептуя Оферту, вы даёте согласие на обработку персональных данных в соответствии с{" "}
                <a href="/privacy" className="text-primary hover:underline">Политикой конфиденциальности</a>.
              </p>
            }
          />

          {/* 7. Ответственность */}
          <Section
            title="7. Ответственность"
            content={
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-lg p-3">
                  <p className="font-medium text-sm mb-2">Мы не несём ответственности за:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Неточность ИИ-ответов</li>
                    <li>• Действия третьих лиц (провайдеры ИИ, платёжные системы)</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-3">
                  <p className="font-medium text-sm mb-2">Вы несёте ответственность за:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Достоверность информации</li>
                    <li>• Сохранность учётных данных</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* 8. Изменение оферты */}
          <Section
            title="8. Изменение оферты"
            content={
              <p className="text-sm">
                Мы вправе изменять Оферту в одностороннем порядке. Изменения вступают в силу через 
                <strong> 5 дней</strong> после публикации в приложении.
              </p>
            }
          />

          {/* 9. Контакты и реквизиты */}
          <Section
            title="9. Контакты и реквизиты"
            content={
              <div className="space-y-4">
                <ContactItem
                  icon={Mail}
                  label="Email для запросов"
                  value="support@smart-word.ru"
                  href={`mailto:support@smart-word.ru`}
                />
                <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ФИО</span>
                    <span className="font-medium">ИП Сейитмаммедов Давут Гелдимырадович</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ИНН</span>
                    <span className="font-medium">236600208052</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ОГРНИП</span>
                    <span className="font-medium">326237500121501</span>
                  </div>
                </div>
              </div>
            }
          />

          {/* Footer */}
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>Оферта составлена в соответствии с ГК РФ и 2300-1 ФЗ «О защите прав потребителей»</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="text-muted-foreground text-sm leading-relaxed">
        {content}
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        {href ? (
          <a href={href} className="font-medium text-primary hover:underline text-sm">{value}</a>
        ) : (
          <p className="font-medium text-sm">{value}</p>
        )}
      </div>
    </div>
  )
}
