// src/data/administratif.ts
import type { Section } from "./types";

const ANEF = "https://administration-etrangers-en-france.interieur.gouv.fr";
const VISA_LONG_SEJOUR = "https://www.service-public.fr/particuliers/vosdroits/F22312";
const AMELI = "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/etudiant-etranger";
const GUIDE_BANQUE = "https://www.service-public.fr/particuliers/vosdroits/N20397";
const GUIDE_TEL = "https://selectra.info/telecom/guides/achat/forfait-mobile-etudiant";

export const ADMIN_SECTIONS: Section[] = [
  {
    id: "visa",
    title: "Validation du visa",
    subtitle: "Valider votre visa long séjour dans les 3 mois",
    steps: [
      "Préparer votre passeport avec visa long séjour",
      "Avoir une adresse en France",
      "Préparer une carte bancaire pour le paiement",
      "Aller sur ANEF et créer votre compte",
      "Téléverser les justificatifs et valider"
    ],
    links: [
      { label: "ANEF – Administration des étrangers", url: ANEF },
      { label: "Service Public – Visa long séjour", url: VISA_LONG_SEJOUR }
    ]
  },
  {
    id: "securite-sociale",
    title: "Sécurité sociale & santé",
    subtitle: "S'inscrire à la sécurité sociale et obtenir la carte Vitale",
    steps: [
      "Créer un compte sur etudiant-etranger.ameli.fr",
      "Fournir passeport, visa, certificat de scolarité, RIB",
      "Suivre la validation et demander la carte Vitale"
    ],
    links: [{ label: "AMELI – Étudiant étranger", url: AMELI }]
  },
  {
    id: "compte-bancaire",
    title: "Compte bancaire",
    subtitle: "Ouvrir un compte pour les paiements en France",
    steps: [
      "Choisir une banque adaptée (en ligne ou agence)",
      "Préparer passeport, attestation de domicile, justificatif d’inscription",
      "Ouvrir le compte et récupérer RIB / carte"
    ],
    links: [{ label: "Service Public – Ouvrir un compte", url: GUIDE_BANQUE }]
  },
  {
    id: "forfait-mobile",
    title: "Forfait téléphonique",
    subtitle: "Souscrire à un forfait mobile français",
    steps: [
      "Choisir un opérateur (couverture & budget)",
      "Préparer passeport et RIB (si prélèvement)",
      "Activer la SIM/eSIM et tester les données"
    ],
    links: [{ label: "Guide forfait étudiant", url: GUIDE_TEL }]
  },
  // “Transport” reste par ville → on affiche un RACCROURCI qui envoie vers le sélecteur de ville
  {
    id: "transport",
    title: "Transport – choisir ma ville",
    subtitle: "Obtenir les infos spécifiques à votre ville d’études",
    steps: [
      "Ouvrir la page Transport",
      "Choisir votre ville",
      "Suivre les titres, plans, réductions et liens locaux"
    ],
    links: [],
    href: "/administratif/transport/city" // <- ta page actuelle de sélection de ville
  }
];
