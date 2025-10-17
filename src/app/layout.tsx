import "../styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
title: "Guide d’intégration",
description: "Centralise les démarches en France",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr">
<body className={`${inter.className} bg-background text-foreground`}>
<div className="container-pro py-8">
{children}
</div>
</body>
</html>
)
}