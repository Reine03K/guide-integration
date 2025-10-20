"use client"

import Link from "next/link"
import { CITIES } from "@/data/cities"
import { Input } from "@/components/ui/input"
import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function CitySelector() {
  const [q, setQ] = useState("")

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return CITIES
    return CITIES.filter(c => c.name.toLowerCase().includes(s) || c.region.toLowerCase().includes(s))
  }, [q])

  return (
    <main className="min-h-screen p-6 space-y-4">
      <h1 className="text-2xl font-bold">Loisirs — choisir une ville</h1>
      <Input
        placeholder="Rechercher une ville…"
        className="h-11 rounded-2xl"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Link key={c.slug} href={`/loisirs/${c.slug}`}>
            <Card className="rounded-2xl border hover:shadow-md transition active:scale-95">
              <CardContent className="p-4">
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.region}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
