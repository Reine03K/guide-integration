"use client";
import { useEffect, useState } from "react";
import { getProgress, setTaskDone } from "./progress";
import { readUser } from "./user";

export function useSectionProgress(section: string, city: string) {
  const [userName, setUserName] = useState<string | null>(null);
  const [map, setMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setUserName(readUser()?.name ?? null);
    const load = () => setMap(getProgress(readUser()?.name, section, city));
    load();
    const onStorage = (e: StorageEvent) => {
      if (e.key?.startsWith("progress:")) load();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [section, city]);

  const toggle = (taskId: string, done: boolean) => {
    setTaskDone(userName, section, city, taskId, done);
    setMap(getProgress(userName, section, city));
  };

  return { doneMap: map, setDone: toggle };
}
