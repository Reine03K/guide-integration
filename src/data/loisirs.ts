export type Link = { label: string; url: string }

export const LOISIRS_BY_CITY: Record<string, Link[]> = {
  strasbourg: [
    { label: "Cathédrale de Strasbourg", url: "https://www.cathedrale-strasbourg.fr/" },
    { label: "Batorama", url: "https://www.batorama.com/" },
  ],
  paris: [
    { label: "Paris Musées", url: "https://www.parismusees.paris.fr/" },
    { label: "Vélib’", url: "https://www.velib-metropole.fr/" },
  ],
  lyon: [{ label: "Vieux-Lyon", url: "https://www.lyon-france.com/" }],
  toulouse: [{ label: "Cité de l’Espace", url: "https://www.cite-espace.com/" }],
  nantes: [{ label: "Machines de l’Île", url: "https://www.lesmachines-nantes.fr/" }],
  lille: [{ label: "Palais des Beaux-Arts", url: "https://pba.lille.fr/" }],
  vendee: [{ label: "Haras de la Vendée", url: "https://www.haras-vendee.fr/" }],
}
