// src/data/administratif.ts
import { Section } from "@/types/guide";

export const administratif: Section = {
  id: "administratif",
  title: "Démarches administratives (France)",
  tasks: [
    {
      id: "visa-validation",
      title: "Valider votre visa / titre de séjour (ANEF)",
      description: "Dans les 3 mois suivant l’arrivée pour un VLS-TS.",
      steps: [
      "Préparer votre passeport avec visa long séjour",
      "Avoir une adresse en France",
      "Préparer une carte bancaire pour le paiement",
      "Se rendre sur le site ANEF",
      "Créer votre compte et suivre la procédure"
    ],
      links: [
        { label: "ANEF – Étrangers en France", href: "https://administration-etrangers-en-france.interieur.gouv.fr" }
      ]
    },

     {
      id: "Forfait-mobile",
      title: "Forfait téléphonique",
      description: "Souscrire à un forfait mobile français",
    steps: [
      "Comparer les offres disponibles",
      "Choisir entre Free, Lebara, SFR, Bouygues, Orange, RED, B&You",
      "Préparer passeport et RIB (si prélèvement)",
      "Souscrire en ligne ou en boutique"
    ],

      links: [
        { label: "Free Mobile", href: "https://mobile.free.fr" },
        { label: "LEBARA", href: "https://www.lebara.fr/" },
        { label: "SFR", href: "https://www.sfr.fr/" },
        { label: "Bouygues", href: "https://www.bouygues.com/" },
        { label: "Orange", href: "https://www.orange.fr/" },
        { label: "RED by SFR", href: "https://www.red-by-sfr.fr" },
        { label: "B&You", href: "https://www.bouyguestelecom.fr/forfaits-mobiles/serie-speciale-b-and-you" }
      ]
    },

    {
      id: "securite-sociale",
      title: "Sécurité sociale & Santé ",
      description: "S'inscrire à la sécurité sociale, obtenir votre carte Vitale et déclarer un médecin traitant.",
      steps: [
      "S'inscrire sur Ameli Étudiants étrangers",
      "Constituer votre dossier",
      "Obtenir votre numéro de sécurité sociale",
      "Demander votre carte Vitale",
      "Souscrire à une complémentaire santé",
      "Déclarer un médecin traitant via Doctolib",

     ],
      links: [
        { label: "Ameli", href: "https://www.ameli.fr" },
        { label: "Doctolib (Médecin traitant)", href: "https://www.doctolib.fr" }
      ]
    },

    {
      id: "banque",
      title: "Compte bancaire",
      description: "Ouvrir un compte français",
          steps: [
      "Commencer avec Revolut pour une solution rapide",
      "Préparer vos documents (passeport, justificatif de domicile)",
      "Prendre rendez-vous avec BNP Paribas ou autre banque traditionnelle",
      "Finaliser l'ouverture de compte",
    ],

      links: [
        { label: "Revolut", href: "https://www.revolut.com/fr-FR/referral/?referral-code=rkakmeni%21NOV1-25-AR-SDIPTB14-H2-SDTR" }
      ]
    },
    {
    id: "transport",
    title: "Transport – choisir ma ville",
    description: "Obtenir les infos spécifiques à votre ville d’études",
    steps: [
      "Ouvrir la page Transport",
      "Choisir votre ville",
      "Suivre les titres, plans, réductions et liens locaux"
    ],
    links: [ 
      { label:"Transport", href: "/administratif/transport/city" } // <- ta page actuelle de sélection de ville
      ],
    },

    {
      id: "CAF",
      title: "Aides au logement CAF",
      description: "Demander l'APL (Aide Personnalisée au Logement)",
          steps: [
      "Créer votre compte sur le site CAF",
      "Constituer votre dossier APL",
      "Fournir les justificatifs demandés",
      "Suivre votre demande",
    ],
      links: [
        { label: "CAF", href: "https://www.caf.fr" }
     ]
    }, 

 {
      id: "Services étudiants",
      title: "Services étudiants",
      description: "CVEC, bourses, logement Crous",
          steps: [
      "Se connecter à MesServices",
      "Régler la CVEC (Contribution Vie Étudiante et de Campus)",
      "Faire une demande de bourse si éligible",
      "Candidater pour un logement Crous",
    ],
      links: [
       
         { label: "MesServices", href: "https://messervices.etudiant.gouv.fr/" }
        ]
    }, 

    {
      id: "Impôts",
      title: "Declaration d'impoôts",
      description: "Créer un espace particulier et déclarer si nécessaire.",
     steps: [
      "Aller sur Impots.gouv.fr",
      "Créer votre espace particulier",
      "Comprendre vos obligations fiscales",
      "Préparer votre première déclaration",
      ],
      links: [
        { label: "Impots.gouv", href: "https://www.impots.gouv.fr" },
        { label: "Service-public.gouv", href: "https://www.service-public.gouv.fr" }

      ]
    },

  {
      id: "Titre de séjour",
      title: "Titre de séjour",
      description: "Renouveler votre titre de séjour 3 mois avant expiration",
          steps: [
      "Se connecter sur ANEF 3 mois avant l'expiration",
      " selectionner (je demande ou renouvelle un titre de sejour)",
      "Préparer les documents nécessaires",
      "Fournir les justificatifs demandés",
      "Suivre l'avancement de votre dossier",
    ],
      links: [
        { label: "ANEF", href: "https://administration-etrangers-en-france.interieur.gouv.fr/" }
     ]
    }
 ],
}

