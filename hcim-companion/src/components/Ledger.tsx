"use client";

import { useEffect, useMemo, useState } from "react";
import { roadmap } from "@/data/roadmap";
import type { KeyStatus, Progress } from "@/lib/types";
import {
  currentGateIndex,
  isGateComplete,
  keyStatus,
  loadProgress,
  saveProgress,
} from "@/lib/progress";

export default function Ledger() {
  const [progress, setProgress] = useState<Progress>({
    keys: {},
    loopsDoneAt: {},
  });
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const [ready, setReady] = useState(false);
  const [hideDone, setHideDone] = useState(true);

  useEffect(() => {
    const loaded = loadProgress();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loaded);
    setSelected(currentGateIndex(roadmap, loaded));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveProgress(progress);
  }, [progress, ready]);

  const gate = roadmap[selected];
  const currentIdx = currentGateIndex(roadmap, progress);
  const doneGates = roadmap.filter((g) => isGateComplete(g, progress)).length;

  const visibleKeys = useMemo(() => {
  const q = query.trim().toLowerCase();
  return gate.keys.filter((k) => {
    const status = keyStatus(progress, k.id);
    if (hideDone && (status === "done" || status === "skipped")) return false;
    if (!q) return true;
    return (
      k.title.toLowerCase().includes(q) ||
      (k.note ?? "").toLowerCase().includes(q)
    );
  });
}, [gate, query, hideDone, progress]);

  const visibleLoops = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return gate.room;
    return gate.room.filter((l) => l.title.toLowerCase().includes(q));
  }, [gate, query]);

  function setKey(id: string, status: KeyStatus) {
    setProgress((prev) => ({
      ...prev,
      keys: { ...prev.keys, [id]: status },
    }));
  }

  function toggleKey(id: string) {
    const next = keyStatus(progress, id) === "done" ? "todo" : "done";
    setKey(id, next);
  }

  function markLoopDone(id: string) {
    setProgress((prev) => ({
      ...prev,
      loopsDoneAt: { ...prev.loopsDoneAt, [id]: Date.now() },
    }));
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-[#6b5b45]">
        Opening the ledger…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a241c] p-4 md:p-8">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-[#3d3428] bg-[#f4efe4] shadow-2xl">
        <aside className="hidden w-56 shrink-0 flex-col bg-[#1c1813] text-[#e8e0d4] md:flex">
          <div className="border-b border-[#3d3428] px-5 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c4a45a]">
              Your path
            </p>
            <p className="mt-3 text-sm text-[#8a7b64]">
              Gate {Math.min(currentIdx + 1, roadmap.length)} of{" "}
              {roadmap.length}
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded bg-[#3d3428]">
              <div
                className="h-full bg-[#c4a45a]"
                style={{ width: `${(doneGates / roadmap.length) * 100}%` }}
              />
            </div>
          </div>
          <nav className="flex-1 py-3">
            {roadmap.map((g, i) => {
              const complete = isGateComplete(g, progress);
              const current = i === currentIdx;
              const active = i === selected;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelected(i)}
                  className={`flex w-full items-center gap-3 px-5 py-3 text-left text-sm ${
                    active
                      ? "bg-[#2a241c] text-[#f4efe4]"
                      : "text-[#b7ab98] hover:bg-[#241f19]"
                  }`}
                >
                  <span className="w-4 text-center text-[#c4a45a]">
                    {complete ? "✓" : current ? "●" : "○"}
                  </span>
                  <span>
                    <span className="block font-medium">{g.title}</span>
                    <span className="text-[11px] uppercase tracking-wide text-[#8a7b64]">
                      {complete
                        ? "Done"
                        : current
                          ? "Current"
                          : i < currentIdx
                            ? "Open"
                            : "Locked"}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-wrap items-center gap-3 border-b border-[#ddd3c3] px-5 py-4">
            <div className="mr-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8a7b64]">
                The Ledger
              </p>
              <h1 className="font-serif text-2xl text-[#2a241c] md:text-3xl">
                Gate {selected + 1} {gate.title}
              </h1>
              <p className="text-sm text-[#6b5b45]">{gate.subtitle}</p>
              <p className="text-xs text-[#8a7b64]">
                {gate.keys.filter((k) => {
                  const s = keyStatus(progress, k.id);
                  return s !== "done" && s !== "skipped";
                }).length}{" "}
                / {gate.keys.length} keys left
              </p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search this gate…"
              className="rounded-md border border-[#d4c8b4] bg-white px-3 py-2 text-sm text-[#2a241c] outline-none focus:border-[#c4a45a]"
            />
            <span className="rounded border border-[#8a2e24] px-2 py-1 text-[11px] font-semibold tracking-wide text-[#8a2e24]">
              STILL HARDCORE
            </span>
            <label className="flex items-center gap-2 text-xs text-[#6b5b45]">
            <input
                type="checkbox"
                checked={hideDone}
                onChange={(e) => setHideDone(e.target.checked)}
              />
              Hide completed
            </label>
          </header>

          <div className="flex gap-2 overflow-x-auto border-b border-[#ddd3c3] px-4 py-2 md:hidden">
            {roadmap.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setSelected(i)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs ${
                  i === selected
                    ? "bg-[#1c1813] text-[#f4efe4]"
                    : "bg-[#e8dfd0] text-[#6b5b45]"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>

          <main className="flex-1 space-y-8 overflow-auto px-5 py-6">
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7b64]">
                Keys
              </h2>
              <ul className="divide-y divide-[#ddd3c3] rounded-lg border border-[#ddd3c3] bg-white/50">
                {visibleKeys.map((key) => {
                  const status = keyStatus(progress, key.id);
                  const finished = status === "done" || status === "skipped";
                  return (
                    <li
                      key={key.id}
                      className={`flex flex-wrap items-start gap-3 px-4 py-3 ${
                        finished ? "opacity-45" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={status === "done"}
                        onChange={() => toggleKey(key.id)}
                        className="mt-1 size-4 accent-[#c4a45a]"
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-medium text-[#2a241c] ${
                            finished ? "line-through" : ""
                          }`}
                        >
                          {key.title}
                        </p>
                        {key.note ? (
                          <p className={`text-sm text-[#6b5b45] ${finished ? "line-through" : ""}`}>
                            {key.note}
                          </p>
                        ) : null}
                      </div>
                      
                      <button
                        onClick={() =>
                          setKey(key.id, status === "skipped" ? "todo" : "skipped")
                        }
                        className="text-xs text-[#8a7b64] underline"
                      >
                        {status === "skipped" ? "Unskip" : "Skip"}
                      </button>
                      <span className="text-xs uppercase tracking-wide text-[#8a7b64]">
                        {status === "done"
                          ? "Obtained"
                          : status === "skipped"
                            ? "Skipped"
                            : "Not obtained"}
                      </span>
                    </li>
                  );
                })}
                {visibleKeys.length === 0 ? (
                  <li className="px-4 py-6 text-sm text-[#8a7b64]">
                    No keys match.
                  </li>
                ) : null}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7b64]">
                In this room
              </h2>
              {visibleLoops.length === 0 ? (
                <p className="text-sm text-[#8a7b64]">
                  No loops on this gate. Add some in{" "}
                  <code className="rounded bg-[#e8dfd0] px-1">
                    src/data/roadmap.ts
                  </code>
                  .
                </p>
              ) : (
                <ul className="divide-y divide-[#ddd3c3] rounded-lg border border-[#ddd3c3] bg-white/50">
                  {visibleLoops.map((loop) => {
                    const last = progress.loopsDoneAt[loop.id];
                    return (
                      <li
                        key={loop.id}
                        className="flex items-center gap-3 px-4 py-3"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-[#2a241c]">
                            {loop.title}
                          </p>
                          <p className="text-sm text-[#6b5b45]">
                            Every {loop.every}
                          </p>
                        </div>
                        <span className="text-xs text-[#8a7b64]">
                          {last
                            ? `Last done ${new Date(last).toLocaleTimeString()}`
                            : "Not done yet"}
                        </span>
                        <button
                          onClick={() => markLoopDone(loop.id)}
                          className="rounded-md border border-[#c4a45a] px-3 py-1 text-xs text-[#2a241c]"
                        >
                          Done
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}