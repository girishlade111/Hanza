import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { accordionVariants } from "../../lib/animations";
import { cn } from "../../lib/utils";

export interface AccordionItemData {
  id: string;
  index?: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string | null;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId = null,
  className,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={cn(
        "divide-y divide-[#121212]/10 border-y border-[#121212]/10 dark:divide-white/12 dark:border-white/12",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="bg-transparent">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-[#FF6044] cursor-pointer"
            >
              <div className="flex items-baseline gap-4">
                {item.index ? (
                  <span className="font-mono text-xs font-medium tracking-[0.08em] text-[#FF6044] tabular-nums">
                    {item.index}.
                  </span>
                ) : null}
                <span className="font-sans text-base font-extrabold uppercase tracking-[-0.02em] text-[#121212] transition-colors group-hover:text-[#FF6044] sm:text-lg dark:text-white">
                  {item.title}
                </span>
              </div>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center border border-[#121212]/15 transition-colors dark:border-white/15",
                  isOpen
                    ? "border-[#FF6044] bg-[#FF6044] text-white"
                    : "text-[#121212] group-hover:border-[#FF6044] group-hover:text-[#FF6044] dark:text-white"
                )}
                aria-hidden="true"
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.75} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  variants={accordionVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <div className="pb-6 pr-2 sm:pl-9 sm:pr-12 text-[15px] leading-[1.65] text-[#121212]/70 dark:text-white/70">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
