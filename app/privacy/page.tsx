"use client";

import { motion } from "framer-motion";
import { Shield, Mail, MapPin } from "lucide-react";

export default function PrivacyPage() {
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
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Политика конфиденциальности
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              В отношении обработки персональных данных пользователей мобильного
              приложения «SmartWord»
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
          {/* 1. Оператор */}
          <Section
            title="1. Оператор персональных данных"
            content={
              <>
                <p>
                  Оператором является индивидуальный предприниматель{" "}
                  <strong>ИП Сейитмаммедов Давут Гелдимырадович </strong>
                  (ИНН 236600208052, ОГРНИП 326237500121501).
                </p>
                <p className="mt-2">
                  Обработка осуществляется в соответствии с Федеральным законом
                  от 27.07.2006 № 152-ФЗ «О персональных данных».
                </p>
              </>
            }
          />

          {/* 2. Какие данные собираем */}
          <Section
            title="2. Какие данные мы обрабатываем"
            content={
              <ul className="space-y-2">
                <DataItem
                  title="Учётные данные"
                  items={["Email", "Хеш пароля", "Дата создания аккаунта"]}
                />
                <DataItem
                  title="Google"
                  items={["Google ID", "Email", "Имя", "Аватар"]}
                />
                <DataItem
                  title="Данные об обучении"
                  items={["Словари и слова", "Прогресс", "Статистика"]}
                />
                <DataItem
                  title="ИИ-функции"
                  items={["Запросы к ИИ", "Контекст диалога"]}
                />
                <DataItem
                  title="Платежи"
                  items={["Статус подписки", "История покупок"]}
                />
                <DataItem
                  title="Технические данные"
                  items={["IP-адрес", "Устройство", "Журналы событий"]}
                />
              </ul>
            }
          />

          {/* 3. Цели */}
          <Section
            title="3. Для чего мы обрабатываем данные"
            content={
              <ul className="list-disc pl-5 space-y-1">
                <li>Регистрация, вход, восстановление доступа</li>
                <li>
                  Оказание услуг приложения (словари, тренировки, статистика)
                </li>
                <li>Работа ИИ-функций (чат, перевод, подсказки)</li>
                <li>Обработка платежей Premium-подписки</li>
                <li>Ответы на ваши запросы</li>
              </ul>
            }
          />

          {/* 4. Передача третьим лицам */}
          <Section
            title="4. ⚠️ Передача данных третьим лицам"
            content={
              <>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="text-sm">
                    <strong>Трансграничная передача:</strong> Для работы AI-чата
                    ваши запросы передаются провайдеру{" "}
                    <strong>OpenRouter (США)</strong>. Вы даёте согласие на
                    трансграничную передачу данных при регистрации.
                  </p>
                </div>
                <p className="text-sm">
                  Также данные передаются: <strong>ЮKassa</strong> (платежи),{" "}
                  <strong>Google</strong> (OAuth),{" "}
                  <strong>Хостинг-провайдеру</strong> (хранение данных в РФ).
                </p>
              </>
            }
          />

          {/* 5. Сроки хранения */}
          <Section
            title="5. Сроки хранения"
            content={
              <p className="text-sm">
                Мы храним ваши персональные данные до тех пор, пока вы не удалите свой аккаунт.
                После удаления аккаунта данные удаляются немедленно.
              </p>
            }
          />

          {/* 6. Запросы по персональным данным */}
          <Section
            title="6. Запросы по персональным данным"
            content={
              <p className="text-sm">
                Для запроса на доступ, исправление или удаление данных напишите
                на:{" "}
                <a
                  href="mailto:support@smart-word.ru"
                  className="text-primary hover:underline"
                >
                  support@smart-word.ru
                </a>
              </p>
            }
          />

          {/* 7. Контакты оператора */}
          <Section
            title="7. Контакты оператора"
            content={
              <ContactItem
                icon={Mail}
                label="Email для запросов"
                value="support@smart-word.ru"
                href={`mailto:support@smart-word.ru`}
              />
            }
          />

          {/* 8. Реквизиты */}
          <Section
            title="8. Реквизиты ИП"
            content={
              <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ФИО</span>
                  <span className="font-medium">
                    Сейитмаммедов Давут Гелдимырадович
                  </span>
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
            }
          />

          {/* Footer */}
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>
              Документ составлен в соответствии с Федеральным законом № 152-ФЗ
              «О персональных данных»
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="text-muted-foreground text-sm leading-relaxed">
        {content}
      </div>
    </section>
  );
}

function DataItem({ title, items }: { title: string; items: string[] }) {
  return (
    <li className="text-sm">
      <strong>{title}:</strong> {items.join(", ")}
    </li>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        {href ? (
          <a
            href={href}
            className="font-medium text-primary hover:underline text-sm"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium text-sm">{value}</p>
        )}
      </div>
    </div>
  );
}
