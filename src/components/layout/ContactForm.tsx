import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { ArrowUpRight, CheckCircle2, RotateCcw } from "lucide-react";
import {
  validateContactForm,
  type ContactFormValues,
} from "../../lib/portfolio-logic";
import { cn } from "../../lib/utils";

interface ContactFormProps {
  inverted?: boolean;
  formIdPrefix?: string;
}

export function ContactForm({
  inverted = false,
  formIdPrefix = "inquiry",
}: ContactFormProps) {
  const reactId = useId();
  const prefix = `${formIdPrefix}-${reactId}`;

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormValues | null>(null);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = e.target.value;
      setValues((prev) => ({ ...prev, [field]: next }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validateContactForm(values);
    if (!result.valid || !result.data) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmittedRecord(result.data);
    setValues({ name: "", email: "", message: "" });

    try {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (!prefersReduced) {
        confetti({
          particleCount: 70,
          spread: 65,
          origin: { y: 0.7 },
          colors: ["#FF6044", "#FFFFFF", "#3DB15E", "#F7F5F2"],
        });
      }
    } catch {
      // Canvas confetti optional fallback in headless environments
    }
  };

  if (submittedRecord) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "border p-6 sm:p-8",
          inverted
            ? "border-white/15 bg-white/[0.03] text-white"
            : "border-[#121212]/15 bg-white text-[#121212] dark:border-white/15 dark:bg-[#181818] dark:text-white"
        )}
      >
        <div className="flex items-center gap-3 text-[#3DB15E]">
          <CheckCircle2 className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em]">
            INQUIRY RECEIVED
          </span>
        </div>
        <h4 className="mt-3 font-sans text-xl font-extrabold uppercase tracking-[-0.03em]">
          THANK YOU, {submittedRecord.name}.
        </h4>
        <p
          className={cn(
            "mt-2 text-sm leading-[1.6]",
            inverted ? "text-white/70" : "text-[#121212]/70 dark:text-white/70"
          )}
        >
          Your message has been logged for Girish Lade. Expect a direct reply at{" "}
          <span className="font-mono text-xs underline underline-offset-4">
            {submittedRecord.email}
          </span>{" "}
          within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmittedRecord(null)}
          className={cn(
            "mt-6 inline-flex min-h-[42px] items-center gap-2 border px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.09em] transition-colors cursor-pointer",
            inverted
              ? "border-white/20 text-white hover:border-[#FF6044] hover:text-[#FF6044]"
              : "border-[#121212]/20 text-[#121212] hover:border-[#FF6044] hover:text-[#FF6044] dark:border-white/20 dark:text-white"
          )}
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          <span>SEND ANOTHER MESSAGE</span>
        </button>
      </div>
    );
  }

  const inputBase = cn(
    "w-full border px-4 py-3.5 font-sans text-sm transition-colors focus:outline-none focus:border-[#FF6044]",
    inverted
      ? "border-white/15 bg-white/[0.03] text-white placeholder:text-white/35"
      : "border-[#121212]/15 bg-white text-[#121212] placeholder:text-[#121212]/40 dark:border-white/15 dark:bg-[#181818] dark:text-white dark:placeholder:text-white/35"
  );

  const labelBase = cn(
    "mb-2 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em]",
    inverted ? "text-white/75" : "text-[#121212]/75 dark:text-white/75"
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${prefix}-name`} className={labelBase}>
            <span className="inline-block h-1.5 w-1.5 bg-[#FF6044]" aria-hidden="true" />
            <span>YOUR NAME</span>
          </label>
          <input
            id={`${prefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Rivera"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${prefix}-name-error` : undefined}
            className={cn(inputBase, errors.name && "border-[#FF6044]")}
          />
          {errors.name ? (
            <p
              id={`${prefix}-name-error`}
              role="alert"
              className="mt-1.5 font-mono text-[11px] text-[#FF6044]"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${prefix}-email`} className={labelBase}>
            <span className="inline-block h-1.5 w-1.5 bg-[#FF6044]" aria-hidden="true" />
            <span>EMAIL ADDRESS</span>
          </label>
          <input
            id={`${prefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${prefix}-email-error` : undefined}
            className={cn(inputBase, errors.email && "border-[#FF6044]")}
          />
          {errors.email ? (
            <p
              id={`${prefix}-email-error`}
              role="alert"
              className="mt-1.5 font-mono text-[11px] text-[#FF6044]"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={`${prefix}-message`} className={labelBase}>
          <span className="inline-block h-1.5 w-1.5 bg-[#FF6044]" aria-hidden="true" />
          <span>HOW CAN I HELP?</span>
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows={4}
          placeholder="Tell me about your product, timeline, and goals..."
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${prefix}-message-error` : undefined}
          className={cn(inputBase, "resize-y", errors.message && "border-[#FF6044]")}
        />
        {errors.message ? (
          <p
            id={`${prefix}-message-error`}
            role="alert"
            className="mt-1.5 font-mono text-[11px] text-[#FF6044]"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="group flex w-full min-h-[54px] items-center justify-between bg-[#FF6044] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#FF755C] active:scale-[0.995] cursor-pointer"
      >
        <span>SEND PROJECT INQUIRY</span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </button>

      <p
        className={cn(
          "text-xs leading-[1.6]",
          inverted ? "text-white/50" : "text-[#121212]/55 dark:text-white/55"
        )}
      >
        By submitting, you agree to our{" "}
        <Link
          to="/terms"
          className="underline underline-offset-4 hover:text-[#FF6044]"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy"
          className="underline underline-offset-4 hover:text-[#FF6044]"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
