// src/app/administratif/transport/[city]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES } from "@/data/cities";
import { TRANSPORT_BY_CITY } from "@/data/transport";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-static";

type Props = { params: { city: string } };

export default function CityTransport({ params }: Props) {
  const city = params.city;
  const cityData = CITIES.find((c) => c.slug === city);
  const links = TRANSPORT_BY_CITY[city];

  if (!cityData || !links) return notFound();

  return (
    <main className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transport — {cityData.name}</h1>
        <Button asChild className="rounded-2xl bg-brand-600 hover:bg-brand-700 text-white">
          <Link href="/administratif/transport/city">Changer de ville</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Card key={l.url} className="rounded-2xl border">
            <CardContent className="p-5 space-y-2">
              <div className="font-semibold">{l.label}</div>
              <a className="text-brand-600 hover:underline" href={l.url} target="_blank">
                Ouvrir →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
