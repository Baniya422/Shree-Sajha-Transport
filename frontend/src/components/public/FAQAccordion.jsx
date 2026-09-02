import { useState } from 'react'

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState(null)

  const faqs = [
    {
      question: 'What mostly people want is an inc 1?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      question: 'What mostly people want is an inc 2?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'What mostly people want is an inc 3?',
      answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
    },
    {
      question: 'What mostly people want is an inc 4?',
      answer: 'Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      question: 'What mostly people want is an inc 5?',
      answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

      <div className="space-y-4 max-w-3xl">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg">
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full p-6 flex justify-between items-center hover:bg-slate-50 transition"
            >
              <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
              <span className="text-2xl text-slate-400 flex-shrink-0 ml-4">
                {expanded === idx ? '−' : '+'}
              </span>
            </button>

            {expanded === idx && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-200 bg-slate-50">
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
