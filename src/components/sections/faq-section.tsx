"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Eyebrow } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/data/faq";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="py-20 sm:py-32">
      <Container size="narrow">
        <Reveal className="text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
            Good to know before you start.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border sm:mt-14">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-heading text-lg font-bold text-charcoal">
                    {f.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.45, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 leading-relaxed text-muted-foreground">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
