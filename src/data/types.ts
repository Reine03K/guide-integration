// src/data/types.ts
export type LinkItem = { label: string; url: string };

export type Section = {
  id: string;                // ex: "visa"
  title: string;             // ex: "Validation du visa"
  subtitle?: string;         // ex: "Valider votre visa long séjour…"
  steps: string[];           // étapes
  links: LinkItem[];         // liens utiles
  href?: string;             // (optionnel) si c’est un “raccourci” vers une page (ex: /administratif/transport/city)
};
