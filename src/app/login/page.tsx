"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type User = { name: string; email?: string };

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/country";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    const user: User = { name: trimmed, email: email.trim() || undefined };
    // Sauvegarde locale (mock d’auth)
    localStorage.setItem("user", JSON.stringify(user));

    // On peut aussi émettre un event pour que le header s’actualise instantanément
    window.dispatchEvent(new StorageEvent("storage", { key: "user" }));

    router.replace(redirect);
  }

  return (
    <main className="container-pro py-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nom / Prénom</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border px-4 py-2"
            placeholder="Marie Dupont"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email (optionnel)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-4 py-2"
            placeholder="marie.dupont@exemple.fr"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-brand-600 text-white px-6 py-3"
        >
          Se connecter
        </button>
      </form>
    </main>
  );
}
