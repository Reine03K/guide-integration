"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Country() {
  const router = useRouter()
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Choisissez votre pays</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl border hover:shadow-md transition">
          <CardContent className="p-6 space-y-3">
            <div className="text-lg font-semibold">🇫🇷 France</div>
            <p className="text-sm text-muted-foreground">Disponible</p>
            <Button
              className="bg-brand-600 hover:bg-brand-700 text-white rounded-2xl"
              onClick={() => router.push("/dashboard")}
            >
              Continuer
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
