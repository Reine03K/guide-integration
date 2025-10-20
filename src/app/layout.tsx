import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Header } from "@/components/ui/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guide d’intégration",
  description: "Centralise les démarches en France",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <div className="container-pro py-8">{children}</div>
      </body>
    </html>
  )
}
