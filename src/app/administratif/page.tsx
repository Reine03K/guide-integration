import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Administratif() {
  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">Administratif</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/administratif/transport/city">
          <Card className="rounded-2xl border hover:shadow-md transition">
            <CardContent className="p-6">
              <div className="text-lg font-semibold">Transport</div>
              <p className="text-sm text-muted-foreground">Choisir votre ville</p>
            </CardContent>
          </Card>
        </Link>
        {/* plus tard: CAF, sécu, banque, etc. */}
      </div>
    </main>
  )
}
