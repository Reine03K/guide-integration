export type Link = { label: string; url: string }

export const TRANSPORT_BY_CITY: Record<string, Link[]> = {
  strasbourg: [
    { label: "CTS – Réseau bus & tram", url: "https://www.cts-strasbourg.eu/" },
    { label: "Badgéo – Carte", url: "https://www.cts-strasbourg.eu/fr/titres-tarifs/badgeo/" },
  ],
  paris: [
    { label: "RATP – Bus/Métro/RER", url: "https://www.ratp.fr/" },
    { label: "Pass Navigo", url: "https://www.iledefrance-mobilites.fr/titres-et-tarifs/passe-navigo" },
  ],
  lyon: [
    { label: "TCL – Réseau Lyon", url: "https://www.tcl.fr/" },
    { label: "Vélo’v", url: "https://www.velov.grandlyon.com/" },
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
}
