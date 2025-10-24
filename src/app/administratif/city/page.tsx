// src/app/administratif/city/page.tsx
"use client"

import Link from "next/link"
import { CITIES } from "@/data/cities"
import { Input } from "@/components/ui/input"
import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = "force-static"

export default function AdminCitySelector() {
  const [q, setQ] = useState("")
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return CITIES
    return CITIES.filter(
      (c) => c.name.toLowerCase().includes(s) || c.region.toLowerCase().includes(s)
    )
  }, [q])

  return (
    <main className="min-h-screen p-6 space-y-4">
      <h1 className="text-2xl font-bold">Administratif — choisir une ville</h1>

      <Input
        placeholder="Rechercher une ville…"
        className="h-11 rounded-2xl"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Card key={c.slug} className="rounded-2xl border hover:shadow-md transition">
            <CardContent className="p-6 space-y-2">
              <div className="text-lg font-semibold">{c.name}</div>
              <Link className="text-brand-600 hover:underline" href={`/administratif/${c.slug}`}>
                Ouvrir
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
