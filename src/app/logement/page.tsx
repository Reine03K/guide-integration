import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LOGEMENT_FR } from "@/data/logement"
export const dynamic = "force-static"

export default function Logement() {
  return (
    <main className="min-h-screen p-6 space-y-4">
      <h1 className="text-2xl font-bold">Logement</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {LOGEMENT_FR.map((l) => (
          <Card key={l.url} className="rounded-2xl border">
            <CardContent className="p-5">
              <div className="font-semibold">{l.label}</div>
              <Link href={l.url} target="_blank" className="text-brand-600 hover:underline">
                Consulter →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
