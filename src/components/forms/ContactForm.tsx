"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    setStatus(res.ok ? "ok" : "error");
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <input name="name" placeholder="Your name" className="rounded-xl border p-3" required />
      <input name="email" type="email" placeholder="Your email" className="rounded-xl border p-3" required />
      <textarea name="message" placeholder="Your message" className="min-h-32 rounded-xl border p-3" required />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl border px-4 py-2"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
      {status === "ok" && <p className="text-green-600">Message sent!</p>}
      {status === "error" && <p className="text-red-600">Something went wrong.</p>}
    </form>
  );
}
