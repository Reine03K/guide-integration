// src/app/administratif/page.tsx
import Link from "next/link";
import { ADMIN_SECTIONS } from "@/data/administratif";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export default function AdministratifPage() {
  return (
    <main className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Administratif</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ADMIN_SECTIONS.map((s) => (
          <Card key={s.id} className="rounded-2xl border">
            <CardContent className="p-5 space-y-2">
              <div className="font-medium">{s.title}</div>
              {s.subtitle && <p className="text-sm text-muted-foreground">{s.subtitle}</p>}

              {s.href ? (
                <Button asChild className="mt-2">
                  <Link href={s.href}>Ouvrir</Link>
                </Button>
              ) : (
                <Button asChild className="mt-2">
                  <Link href={`/administratif/${s.id}`}>Ouvrir</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
