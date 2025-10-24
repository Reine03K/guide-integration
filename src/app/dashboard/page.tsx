import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
export const dynamic = "force-static"

const tiles = [
  { href: "/administratif", title: "Administratif", desc: "Vos démarches essentielles" },
  { href: "/alimentation", title: "Alimentation", desc: "Supermarchés, marchés, bons plans" },
  { href: "/logement", title: "Logement", desc: "CROUS (national) + plateformes" },
  { href: "/jobs", title: "Jobs", desc: "Emploi, stage, alternance" },
  { href: "/loisirs", title: "Loisirs", desc: "Découvrir sa ville" },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href}>
            <Card className="rounded-2xl border hover:shadow-md transition active:scale-95">
              <CardContent className="p-6">
                <div className="text-lg font-semibold">{t.title}</div>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
