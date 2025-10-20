// src/components/ui/header.tsx (ou src/components/header.tsx)
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <div className="container-pro h-14 flex items-center gap-4">
        <Link href="/" className="font-semibold">Guide d’intégration</Link>
        <nav className="ml-auto flex gap-3 text-sm">
          <Link href="/country" className="hover:underline">Pays</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/administratif" className="hover:underline">Administratif</Link>
          <Link href="/logement" className="hover:underline">Logement</Link>
        </nav>
      </div>
    </header>
  )
}
