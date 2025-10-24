// src/app/administratif/transport/city/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CITIES } from "@/data/cities";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-static";

export default function CitySelector() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CITIES;
    return CITIES.filter(
      (c) => c.name.toLowerCase().includes(s) || c.region.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">Transport — choisir une ville</h1>

      <Input
        placeholder="Rechercher une ville…"
        className="h-11 rounded-2xl"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Card key={c.slug} className="rounded-2xl border">
            <CardContent className="p-5 space-y-1">
              <div className="font-semibold">{c.name}</div>
              <Link className="text-brand-600 hover:underline" href={`/administratif/transport/${c.slug}`} prefetch={false}>
                Voir les liens →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
