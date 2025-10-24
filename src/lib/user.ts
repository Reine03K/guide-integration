export type User = { name: string; email?: string };

export function readUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("user");
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("user");
  // notifier les autres composants ouverts
  window.dispatchEvent(new StorageEvent("storage", { key: "user" }));
}
