"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { readUser, logout, User } from "@/lib/user";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // Charger l'utilisateur + écouter les changements (login/logout dans un autre onglet)
  useEffect(() => {
    setUser(readUser());
    const onStorage = (e: StorageEvent) => {
      if (e.key === "user") setUser(readUser());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <header className="border-b">
      <div className="container-pro h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold">Guide d’intégration</Link>

        <nav className="ml-auto flex gap-4 text-sm">
          {[
            { href: "/country", label: "Pays" },
            { href: "/dashboard", label: "Dashboard" }, // si tu as un index
            { href: "/administratif", label: "Administratif" },
            { href: "/logement", label: "Logement" },
            { href: "/loisirs", label: "Loisirs" },
          ].map((n) => {
            const active = pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active ? "underline underline-offset-4" : ""}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone utilisateur */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm">
                Bonjour <span className="font-medium">{user.name}</span> !
              </span>
              <button
                onClick={() => {
                  logout();
                  // optionnel : revenir à l’accueil
                  router.push("/");
                }}
                className="rounded-xl border px-3 py-1.5 text-sm"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link
              href={`/login?redirect=${encodeURIComponent(pathname || "/country")}`}
              className="rounded-xl border px-3 py-1.5 text-sm"
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
