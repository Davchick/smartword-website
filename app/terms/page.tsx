"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Mail } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="relative bg-linear-to-b from-primary/5 to-transparent border-b border-border/50">
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
              Условия использования (Публичная оферта)
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Мобильное приложение «SmartWord»
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">Версия 1.0</p>
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
                  1.1. Настоящий документ является официальной публичной офертой Индивидуального
                  предпринимателя ИП Сейитмаммедов Давут Гелдимырадович (далее — «Исполнитель»,
                  ИНН 236600208052, ОГРНИП 326237500121501), адрес электронной почты:
                  {" "}
                  <a href="mailto:support@smart-word.ru" className="text-primary hover:underline">
                    support@smart-word.ru
                  </a>
                  , и содержит все существенные условия договора возмездного оказания услуг с
                  использованием мобильного приложения «SmartWord» (далее — «Приложение»).
                </p>
                <p className="text-sm mt-3">
                  1.2. Акцепт (полное и безоговорочное принятие) условий настоящей Оферты
                  осуществляется Пользователем одним из следующих способов:
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>
                    1.2.1. Проставление символа (галочки) в специальном поле («чекбоксе») рядом
                    с текстом «Принимаю политику конфиденциальности и условия использования» в
                    форме регистрации или авторизации в Приложении с последующим успешным
                    завершением процедуры создания учетной записи.
                  </li>
                  <li>
                    1.2.2. Фактическое начало использования любого функционала Приложения (в том
                    числе просмотр словарей или использование AI-чата) при условии, что Пользователь
                    ранее не осуществил явный отказ от принятия Оферты.
                  </li>
                </ul>
                <p className="text-sm mt-3">
                  1.3. Акцептуя Оферту указанными способами, Пользователь подтверждает, что он
                  ознакомлен, согласен и принимает все условия в полном объеме, а также предоставляет
                  необходимые согласия на обработку данных согласно{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Политике конфиденциальности
                  </a>
                  .
                </p>
              </>
            }
          />

          {/* 2. Предмет договора и услуги */}
          <Section
            title="2. Предмет договора и услуги"
            content={
              <>
                <p className="text-sm">
                  2.1. Исполнитель предоставляет Пользователю право использования Приложения на
                  условиях простой (неисключительной) лицензии, а также оказывает сопутствующие
                  услуги, включая:
                </p>
                <ul className="space-y-1 text-sm mt-2">
                  <li>• Управление личными словарями и лексическими единицами;</li>
                  <li>• Доступ к тренировочным режимам (флеш-карточки, письменные упражнения);</li>
                  <li>• Доступ к функциям искусственного интеллекта (AI-чат для языковой практики, перевод текста);</li>
                  <li>• Сбор и отображение статистики обучения.</li>
                </ul>
                <p className="text-sm mt-3">
                  2.2. Базовый функционал Приложения предоставляется бесплатно. Расширенный
                  функционал доступен на условиях платной подписки «Premium» согласно разделу 3
                  настоящей Оферты.
                </p>
              </>
            }
          />

          {/* 3. Premium-подписка */}
          <Section
            title="3. Premium-подписка"
            content={
              <>
                <p className="text-sm mb-3">
                  3.1. Premium-подписка — платная услуга, расширяющая стандартный функционал
                  Приложения.
                </p>
                
                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">3.2. Состав Premium-доступа:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Снятие ограничений на количество словарей и слов, установленных в базовой версии Приложения.</li>
                    <li>• Снятие ограничений на количество сообщений в AI-чате с ассистентом «Лекси» с правом применения антифлуд-мер.</li>
                    <li>• Приоритетный порядок обработки обращений в службу поддержки.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">3.3. Тарифные планы и стоимость:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 1 месяц: 299 рублей;</li>
                    <li>• 6 месяцев: 1 699 рублей;</li>
                    <li>• 12 месяцев: 3 169 рублей.</li>
                  </ul>
                </div>

                <p className="text-sm">
                  3.4. Доступ к Premium-функциям активируется автоматически при успешном
                  подтверждении оплаты и действует в течение оплаченного периода.
                </p>
              </>
            }
          />

          {/* 4. Порядок оплаты и возврат средств */}
          <Section
            title="4. Порядок оплаты и возврат средств"
            content={
              <>
                <p className="text-sm mb-3">
                  <strong>4.1. Способы оплаты:</strong> Платежи принимаются через сервис ЮKassa с
                  использованием:
                </p>
                <ul className="text-sm space-y-1 mb-3">
                  <li>• Банковских карт Visa, Mastercard, МИР;</li>
                  <li>• Системы быстрых платежей (СБП);</li>
                  <li>• SberPay;</li>
                  <li>• T-Pay.</li>
                </ul>

                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">4.2. Условия возврата денежных средств:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 4.2.1. Пользователь вправе отказаться от исполнения договора в любое время в соответствии со ст. 32 Закона РФ «О защите прав потребителей» и ст. 782 ГК РФ.</li>
                    <li>• 4.2.2. В течение 14 календарных дней: возврат пропорционально оставшемуся периоду, за вычетом фактически понесенных расходов, если Premium-функции не использованы в значительном объеме.</li>
                    <li>• Значительный объем: более 10 сообщений в AI-чате или более 5 пользовательских словарей.</li>
                    <li>• По истечении 14 дней: возврат по письменному заявлению в индивидуальном порядке (до 10 рабочих дней).</li>
                    <li>• 4.2.3. Пункт не ограничивает право Пользователя на отказ от услуги в течение оплаченного периода.</li>
                  </ul>
                </div>

                <p className="text-sm">
                  4.3. Для оформления возврата необходимо направить запрос на{' '}
                  <a href="mailto:support@smart-word.ru" className="text-primary hover:underline">
                    support@smart-word.ru
                  </a>
                  {' '}с указанием адреса электронной почты, привязанного к аккаунту, и причины
                  обращения. Срок рассмотрения — до 10 рабочих дней.
                </p>
              </>
            }
          />

          {/* 5. Использование функций ИИ */}
          <Section
            title="5. Использование функций искусственного интеллекта (ИИ)"
            content={
              <>
                <p className="text-sm mb-3">
                  5.1. Приложение использует технологии ИИ. Исполнитель не несет ответственности за смысловое содержание, точность или
                  актуальность информации, сгенерированной ИИ.
                </p>
                <div className="mb-4">
                  <p className="text-sm">
                    <strong>5.2. Предупреждение:</strong> Функции ИИ не предназначены для
                    использования в критически важных сферах (медицина, юриспруденция, финансовые
                    консультации). Любые решения на основе таких данных принимаются Пользователем
                    на свой риск.
                  </p>
                </div>
              </>
            }
          />

          {/* 6. Персональные данные */}
          <Section
            title="6. Персональные данные"
            content={
              <>
                <p className="text-sm">
                  6.1. Обработка персональных данных Пользователя осуществляется в строгом
                  соответствии с{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Политикой конфиденциальности
                  </a>
                  , размещенной в Приложении, и Федеральным законом № 152-ФЗ «О персональных
                  данных».
                </p>
                <p className="text-sm mt-3">
                  6.2. Акцепт настоящей Оферты подтверждает ознакомление Пользователя с Политикой
                  конфиденциальности.
                </p>
              </>
            }
          />

          {/* 7. Ответственность */}
          <Section
            title="7. Ответственность сторон"
            content={
              <div className="space-y-3 text-sm">
                <p>
                  7.1. Исполнитель не несет ответственности за:
                </p>
                <div className="bg-card border border-border rounded-lg p-3">
                  <p className="font-medium text-sm mb-2">Ограничения ответственности:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Технические перебои в работе Приложения, вызванные действиями хостинг-провайдеров или сбоями в сети Интернет;</li>
                    <li>• Неточность или неполноту данных, сгенерированных модулем ИИ.</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-3">
                  <p className="font-medium text-sm mb-2">Ответственность сторон:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 7.2. Исполнитель несет ответственность перед Пользователем за надлежащее оказание оплаченных услуг.</li>
                    <li>• 7.2. Исполнитель вправе предъявить регрессные требования к третьим лицам, если нарушение возникло по их вине.</li>
                    <li>• 7.3. Пользователь несет ответственность за сохранность учетных данных (логин/пароль).</li>
                    <li>• 7.3. Пользователь несет ответственность за достоверность информации, предоставляемой при регистрации.</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* 8. Изменение условий оферты */}
          <Section
            title="8. Изменение условий оферты"
            content={
              <>
                <p className="text-sm">
                  8.1. Исполнитель вправе в одностороннем порядке вносить изменения в текст
                  настоящей Оферты.
                </p>
                <p className="text-sm mt-3">
                  8.2. Новая редакция Оферты вступает в силу с момента ее публикации в Приложении.
                </p>
                <p className="text-sm mt-3">
                  8.3. Существенное условие для подписчиков Premium: изменения, ухудшающие положение
                  Пользователя (например, сокращение перечня Premium-функций или увеличение стоимости),
                  не применяются к ранее оплаченным и действующим периодам подписки. Такие изменения
                  вступают в силу только после окончания текущего оплаченного периода Пользователя.
                </p>
              </>
            }
          />

          {/* 9. Заключительные положения и реквизиты */}
          <Section
            title="9. Заключительные положения и реквизиты"
            content={
              <div className="space-y-4">
                <p className="text-sm">
                  9.1. Все споры решаются путем переговоров. При недостижении согласия спор
                  передается в суд по месту нахождения Исполнителя в соответствии с действующим
                  законодательством РФ.
                </p>
                <ContactItem
                  icon={Mail}
                  label="Email для запросов"
                  value="support@smart-word.ru"
                  href={`mailto:support@smart-word.ru`}
                />
                <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-muted-foreground shrink-0">Статус</span>
                    <span className="font-medium wrap-break-word sm:text-right">Индивидуальный предприниматель</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-muted-foreground shrink-0">ФИО</span>
                    <span className="font-medium wrap-break-word sm:text-right">ИП Сейитмаммедов Давут Гелдимырадович</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-muted-foreground shrink-0">ИНН</span>
                    <span className="font-medium wrap-break-word sm:text-right">236600208052</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-muted-foreground shrink-0">ОГРНИП</span>
                    <span className="font-medium wrap-break-word sm:text-right">326237500121501</span>
                  </div>
                </div>
              </div>
            }
          />

          {/* Footer */}
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground" />
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
