"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { MailIcon } from "./Icons";

// The envelope icon: copies the address and says "Copied" in its tooltip.
export function CopyEmail({ email, index }: { email: string; index: number }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      try {
        const field = document.createElement("textarea");
        field.value = email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        ok = document.execCommand("copy");
        field.remove();
      } catch {}
    }

    // If the clipboard is unavailable, fall back to opening the mail app.
    if (!ok) {
      window.location.href = `mailto:${email}`;
      return;
    }

    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <>
      <button
        type="button"
        className="social-link social-edge"
        data-label={copied ? "Copied!" : "Copy email"}
        data-copied={copied || undefined}
        aria-label={`Copy email address ${email}`}
        onClick={copy}
        style={{ "--i": index } as CSSProperties}
      >
        <MailIcon />
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `Copied ${email} to the clipboard` : ""}
      </span>
    </>
  );
}
