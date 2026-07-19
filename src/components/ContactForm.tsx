"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/helderjjobs@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 mt-12 text-left"
    >
      {/* Configurações ocultas do Formsubmit */}
      <input type="hidden" name="_subject" value="Novo contato do Portfólio!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />

      {/* Grid para Nome e Email lado a lado no Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome"
            className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="seu@email.com"
            className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Campo da Mensagem */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          placeholder="Como posso ajudar?"
          className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 resize-none"
        ></textarea>
      </div>

      {/* Botão de Enviar com Estados */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="mt-2 flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "idle" && "Enviar Mensagem"}
        {status === "loading" && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-zinc-500 border-t-transparent rounded-full"
          />
        )}
        {status === "success" && "Mensagem Enviada! 🎉"}
        {status === "error" && "Erro ao Enviar. Tente Novamente."}
      </button>
    </form>
  );
}
