// src/types/guide.ts
export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  links?: Link[];
  steps?: string[]; // 👈 AJOUT
};

export type Section = {
  id: "administratif" | "alimentation" | "logement";
  title: string;
  tasks: Task[];
};
