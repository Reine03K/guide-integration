export type City = { slug: string; name: string; region: string }
export const dynamic = "force-static"

export const CITIES: City[] = [
  { slug: "strasbourg", name: "Strasbourg", region: "Grand Est" },
  { slug: "paris", name: "Paris", region: "Île-de-France" },
  { slug: "lyon", name: "Lyon", region: "Auvergne-Rhône-Alpes" },
  { slug: "toulouse", name: "Toulouse", region: "Occitanie" },
  { slug: "nantes", name: "Nantes", region: "Pays de la Loire" },
  { slug: "lille", name: "Lille", region: "Hauts-de-France" },
  { slug: "vendee", name: "Vendée", region: "Pays de la Loire" },
]
