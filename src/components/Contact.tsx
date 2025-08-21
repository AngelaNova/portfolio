"use client";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="flex flex-col items-center p-6 pb-20">
      <Image
        src="/coffee.png"
        alt="flower"
        width={25}
        height={25}
        className="-mt-10 mb-10 "
      />
      <h2 className="text-3xl font-bold mb-18 text-emerald-900">
        Let's Connect!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 text-gray-800"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-green-800 rounded bg-white/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-green-800 rounded bg-white/50"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-green-800 rounded h-32 bg-white/50"
        />
        <Button
          type="submit"
          className="w-full p-2 bg-emerald-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </Button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
