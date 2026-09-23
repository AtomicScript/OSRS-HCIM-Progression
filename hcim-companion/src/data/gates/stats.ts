import type { Gate } from "@/lib/types";

export const stats: Gate = {
  id: "stats",
  title: "Stats",
  subtitle: "Combat chapter. Last training threshold before real PvM.",
  keys: [
    {
      id: "attack-70",
      title: "70 Attack",
      note: "Last combat training chapter.",
      risk: "caution",
    },
    {
      id: "strength-70",
      title: "70 Strength",
      note: "Last combat training chapter.",
      risk: "caution",
    },
    {
      id: "defence-70",
      title: "70 Defence",
      note: "Last combat training chapter.",
      risk: "caution",
    },
    {
      id: "ranged-66",
      title: "66 Ranged",
      note: "Last combat training chapter.",
      risk: "safe",
    },
    {
      id: "magic-75",
      title: "75 Magic",
      note: "Last combat training chapter.",
      risk: "safe",
    },
    {
      id: "slayer-58",
      title: "58 Slayer",
      note: "Last combat training chapter. Broad bolts / better tasks after this.",
      risk: "caution",
    },
        {
      id: "black-mask",
      title: "Black mask",
      note: "Cave horrors at 58 Slayer. This gate is not done on 58 alone.",
      risk: "caution",
    },
    {
      id: "rune-boots",
      title: "Rune boots",
      note: "Pick them up during the same slayer/melee grind. Don't start a new chapter for boots.",
      risk: "caution",
    },
  ],
  room: [],
};