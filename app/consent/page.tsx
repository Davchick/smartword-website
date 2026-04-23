"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function ConsentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative bg-linear-to-b from-primary/5 to-transparent border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-primary/10 mb-4 sm:mb-6">
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Согласие на обработку персональных данных
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              для пользователей мобильного приложения «SmartWord»
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Section
            title="1. Общие положения"
            content={
              <>
                <p className="text-sm">
                  1.1. Настоящим я, как субъект персональных данных, свободно, своей волей и в
                  своем интересе даю согласие Индивидуальному предпринимателю ИП Сейитмаммедов
                  Давут Гелдимырадович (ИНН 236600208052, ОГРНИП 326237500121501, e-mail:{" "}
                  <a href="mailto:support@smart-word.ru" className="text-primary hover:underline">
                    support@smart-word.ru
                  </a>
                  ) (далее — «Оператор») на обработку моих персональных данных на условиях,
                  изложенных в настоящем документе.
                </p>
                <p className="text-sm mt-3">
                  1.2. Согласие предоставляется при регистрации в мобильном приложении «SmartWord»
                  путем проставления отметки в соответствующем чекбоксе и действует до его отзыва,
                  если иное не предусмотрено законодательством Российской Федерации.
                </p>
                <p className="text-sm mt-3">
                  1.3. Согласие дано с учетом требований Федерального закона от 27.07.2006 № 152-ФЗ
                  «О персональных данных» и распространяется на обработку данных с использованием
                  средств автоматизации.
                </p>
              </>
            }
          />

          <Section
            title="2. Состав персональных данных"
            content={
              <>
                <p className="text-sm">
                  2.1. В рамках функционирования Приложения Оператор обрабатывает адрес электронной
                  почты (email), указанный мной при регистрации учетной записи.
                </p>
              </>
            }
          />

          <Section
            title="3. Цели обработки персональных данных"
            content={
              <>
                <p className="text-sm">3.1. Персональные данные обрабатываются в целях:</p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• регистрации и идентификации пользователя в Приложении;</li>
                  <li>• предоставления доступа к функционалу Приложения;</li>
                  <li>• исполнения договора на условиях Публичной оферты;</li>
                  <li>• обработки обращений пользователя в службу поддержки.</li>
                </ul>
              </>
            }
          />

          <Section
            title="4. Действия с персональными данными"
            content={
              <>
                <p className="text-sm">
                  4.1. Я даю согласие на совершение следующих действий с персональными данными:
                  сбор, запись, систематизация, накопление, хранение, уточнение (обновление,
                  изменение), извлечение, использование, передача (предоставление доступа), удаление
                  и уничтожение.
                </p>
              </>
            }
          />

          <Section
            title="5. Передача третьим лицам"
            content={
              <>
                <p className="text-sm">
                  5.1. Для достижения указанных целей Оператор вправе привлекать третьих лиц,
                  предоставляющих технологические сервисы, включая:
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• платежный сервис ЮKassa — для обработки платежей по Premium-подписке;</li>
                </ul>
              </>
            }
          />

          <Section
            title="6. Срок обработки и хранение"
            content={
              <>
                <p className="text-sm">
                  6.1. Настоящее согласие действует до момента его отзыва субъектом персональных
                  данных, а также в течение сроков хранения данных, установленных законодательством
                  Российской Федерации для соответствующих категорий информации.
                </p>
                <p className="text-sm mt-3">
                  6.2. После удаления учетной записи или получения отзыва согласия Оператор
                  прекращает обработку и организует удаление персональных данных в сроки,
                  предусмотренные Политикой конфиденциальности и действующим законодательством.
                </p>
              </>
            }
          />

          <Section
            title="7. Права субъекта персональных данных и отзыв согласия"
            content={
              <>
                <p className="text-sm">
                  7.1. Мне разъяснены права субъекта персональных данных, в том числе право
                  получать информацию об обработке моих данных, требовать их уточнения, блокирования
                  или уничтожения в случаях, предусмотренных законом.
                </p>
                <p className="text-sm mt-3">
                  7.2. Я вправе отозвать настоящее согласие путем направления обращения на адрес{" "}
                  <a href="mailto:support@smart-word.ru" className="text-primary hover:underline">
                    support@smart-word.ru
                  </a>{" "}
                  или путем удаления учетной записи в Приложении.
                </p>
                <p className="text-sm mt-3">
                  7.3. Отзыв согласия не влияет на законность обработки, осуществленной до момента
                  его получения Оператором.
                </p>
              </>
            }
          />

          <Section
            title="8. Заключительные положения"
            content={
              <>
                <p className="text-sm">
                  8.1. Настоящее согласие является отдельным юридическим документом, дополняющим{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Политику конфиденциальности
                  </a>{" "}
                  и{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Условия использования
                  </a>
                  .
                </p>
                <p className="text-sm mt-3">
                  8.2. Актуальная редакция согласия размещается по постоянному адресу:{" "}
                  <a href="/consent" className="text-primary hover:underline">
                    smart-word.ru/consent
                  </a>
                  .
                </p>
              </>
            }
          />
        </motion.div>
      </div>
    </main>
  )
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="text-muted-foreground text-sm leading-relaxed">{content}</div>
    </section>
  )
}
