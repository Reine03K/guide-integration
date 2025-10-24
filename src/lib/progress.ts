type DoneMap = Record<string, boolean>;
// key = `${userName}:${section}:${city}` → { [taskId]: true }

function ns(userName: string | undefined | null, section: string, city: string) {
  const u = (userName || "anon").trim().toLowerCase();
  return `progress:${u}:${section}:${city}`;
}

export function getProgress(userName: string | null | undefined, section: string, city: string): DoneMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ns(userName, section, city));
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function setTaskDone(
  userName: string | null | undefined,
  section: string,
  city: string,
  taskId: string,
  done: boolean
) {
  if (typeof window === "undefined") return;
  const key = ns(userName, section, city);
  const map = getProgress(userName, section, city);
  if (done) map[taskId] = true; else delete map[taskId];
  localStorage.setItem(key, JSON.stringify(map));
  window.dispatchEvent(new StorageEvent("storage", { key }));
}
