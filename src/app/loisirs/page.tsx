export const dynamic = "force-static";

import Link from "next/link";
import { CITIES } from "@/data/cities";
import { Card, CardContent } from "@/components/ui/card";

export default function Loisirs() {
  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">Loisirs — choisir votre ville</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((c) => (
          <Card key={c.slug} className="rounded-2xl border hover:shadow-md transition">
            <CardContent className="p-6 space-y-2">
              <div className="text-lg font-semibold">{c.name}</div>
              <Link className="text-brand-600 hover:underline"
                    href={`/loisirs/${c.slug}`} prefetch={false}>
                Ouvrir
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
