"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      company: form.company.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j?.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-black placeholder-gray-500 focus:border-black focus:ring-1 focus:ring-black outline-none transition";

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-xl space-y-5"
    >
      {/* Honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input id="name" name="name" className={input} required />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input id="email" type="email" name="email" className={input} required />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={input} required />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-black text-white px-4 py-3 text-sm font-medium hover:bg-gray-900 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>

      {/* States */}
      {status === "sent" && (
        <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </form>
  );
}
