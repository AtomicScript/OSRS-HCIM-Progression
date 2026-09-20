export type Risk = "safe" | "caution" | "danger";
export type KeyStatus = "todo" | "done" | "skipped";

export type Key = {
  id: string;
  title: string;
  note?: string;
  risk?: Risk;
};

export type Loop = {
  id: string;
  title: string;
  every: string;
  risk?: Risk;
};

export type Gate = {
  id: string;
  title: string;
  subtitle: string;
  keys: Key[];
  room: Loop[];
};

export type Progress = {
  keys: Record<string, KeyStatus>;
  loopsDoneAt: Record<string, number>;
};