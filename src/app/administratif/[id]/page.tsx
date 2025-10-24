// src/app/administratif/[id]/page.tsx
import { notFound, redirect } from "next/navigation";
import { ADMIN_SECTIONS } from "@/data/administratif";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-static";

type Props = { params: { id: string } };

export default function AdminDetail({ params }: Props) {
  const section = ADMIN_SECTIONS.find((s) => s.id === params.id);

  if (!section) return notFound();
  if (section.href) {
    // si quelqu’un tape /administratif/transport → on redirige vers le sélecteur de ville
    redirect(section.href);
  }

  return (
    <main className="min-h-screen p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{section.title}</h1>
        {section.subtitle && <p className="text-muted-foreground">{section.subtitle}</p>}
      </div>

      <Card className="rounded-2xl border">
        <CardContent className="p-5">
          <h2 className="font-semibold mb-3">Étapes à suivre</h2>
          <ol className="space-y-2 list-decimal list-inside">
            {section.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {!!section.links.length && (
        <Card className="rounded-2xl border">
          <CardContent className="p-5 space-y-3">
            <h2 className="font-semibold">Liens utiles</h2>
            <div className="space-y-2">
              {section.links.map((l) => (
                <Button key={l.url} asChild variant="default">
                  <Link href={l.url} target="_blank" rel="noreferrer">Ouvrir — {l.label}</Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
