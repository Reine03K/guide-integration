// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import RegisterSW from "./RegisterSW";

export const metadata: Metadata = {
  title: "Guide Intégration",
  description: "Démarches, logement, alimentation, transports et loisirs – en PWA, offline.",
  themeColor: "#4f46e5",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
