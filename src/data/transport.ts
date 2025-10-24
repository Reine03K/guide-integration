export type Link = { label: string; url: string }
export const dynamic = "force-static"

export const TRANSPORT_BY_CITY: Record<string,  Array<{ label: string; url: string }>> = {
  strasbourg: [
    { label: "CTS – Transport en commun strasbourgeois", url: "https://www.cts-strasbourg.eu/" },
    { label: "Velhop – Vélos en libre-service", url: "https://velhop.strasbourg.eu/" },
  ],
  paris: [
    { label: "RATP (métro, RER, bus)", url: "https://www.ratp.fr/" },
    { label: "Vélib’ Métropole", url: "https://www.velib-metropole.fr/" },
    { label: "Navigo (cartes/abonnements)", url: "https://www.iledefrance-mobilites.fr/" },
  ],
    lyon: [
   { label: "TCL (métro, tram, bus)", url: "https://www.tcl.fr/" },
    { label: "Vélo’v", url: "https://www.velov.grandlyon.com/" },
    { label: "SNCF TER AuRA", url: "https://www.ter.sncf.com/auvergne-rhone-alpes" },
  ],
  toulouse: [
    { label: "Tisséo", url: "https://www.tisseo.fr/" },
    { label: "Pastel – Carte", url: "https://www.tisseo.fr/pastel" },
  ],
  nantes: [
    { label: "TAN", url: "https://www.tan.fr/" },
    { label: "Bicloo", url: "https://www.bicloo.nantesmetropole.fr/" },
  ],
  lille: [
    { label: "Ilévia", url: "https://www.ilevia.fr/" },
    { label: "V’Lille", url: "https://www.ilevia.fr/cms/institutionnel/offre-de-transport/velos/vlille/" },
  ],
  vendee: [
    { label: "Impulsyon (La Roche-sur-Yon)", url: "https://www.impulsyon.fr/" },
  ],
   marseille: [
    { label: "RTM (métro, tram, bus)", url: "https://www.rtm.fr/" },
    { label: "Le Vélo", url: "https://levelo-mpm.fr/" },
    { label: "SNCF TER Sud", url: "https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur" },
  ],
  };
  export const TRANSPORT_CATEGORIES = [
  { key: "transport", label: "Transport" },
];
