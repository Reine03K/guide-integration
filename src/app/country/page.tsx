// src/app/country/page.tsx
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"  // pour un affichage instantané

export default function Country() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Choisissez votre pays</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl border hover:shadow-md transition">
          <CardContent className="p-6 space-y-3">
            <div className="text-lg font-semibold">🇫🇷 France</div>
            <p className="text-sm text-muted-foreground">Disponible</p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700 text-white rounded-2xl">
              <Link href="/dashboard" prefetch>Continuer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl opacity-60">
          <CardContent className="p-6">
            <div className="text-lg font-semibold">Autres pays</div>
            <p className="text-sm text-muted-foreground">Bientôt</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
