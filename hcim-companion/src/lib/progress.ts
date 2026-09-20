import type { Gate, KeyStatus, Progress } from "@/lib/types";

const STORAGE_KEY = "hcim-ledger-progress-v1";

export const emptyProgress = (): Progress => ({
  keys: {},
  loopsDoneAt: {},
});

export function loadProgress(): Progress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Progress;
    return {
      keys: parsed.keys ?? {},
      loopsDoneAt: parsed.loopsDoneAt ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function keyStatus(progress: Progress, keyId: string): KeyStatus {
  return progress.keys[keyId] ?? "todo";
}

export function isGateComplete(gate: Gate, progress: Progress) {
  return gate.keys.every((key) => {
    const status = keyStatus(progress, key.id);
    return status === "done" || status === "skipped";
  });
}

export function currentGateIndex(gates: Gate[], progress: Progress) {
  const open = gates.findIndex((gate) => !isGateComplete(gate, progress));
  return open === -1 ? gates.length - 1 : open;
}