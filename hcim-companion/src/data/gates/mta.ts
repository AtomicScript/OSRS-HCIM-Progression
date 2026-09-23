import type { Gate } from "@/lib/types";

export const mta: Gate = {
  id: "mta",
  title: "MTA",
  subtitle: "Combat chapter. Bones to peaches, rune pouch, infinity boots.",
  keys: [
    {
      id: "temple-of-the-eye",
      title: "Temple of the Eye — unlock GotR",
      note: "Skip if you are buying a starter rune stack instead.",
      risk: "safe",
    },
    {
      id: "gotr-rune-stack",
      title: "GotR until a MTA rune stack",
      note: "Aim ~200 laws, ~400 natures, ~300 cosmics to start. Skip if shops cover you.",
      risk: "safe",
    },
    {
      id: "mta-staffs",
      title: "Lava or mud staff (and a water source)",
      note: "Cuts elemental runes in alch/enchant/graveyard.",
      risk: "safe",
    },
    {
      id: "mta-points",
      title: "MTA points: 200 tele / 300 alch / 2000 ench / 200 grave",
      note: "Enough for pouch + peaches + boots. Rooms spend laws, nats, cosmics as you go.",
      risk: "safe",
    },
    {
      id: "rune-pouch",
      title: "Rune pouch",
      note: "150 / 200 / 1500 / 150.",
      risk: "safe",
    },
    {
      id: "bones-to-peaches",
      title: "Bones to peaches",
      note: "200 / 300 / 2000 / 200.",
      risk: "safe",
    },
    {
      id: "infinity-boots",
      title: "Infinity boots",
      note: "120 / 120 / 1200 / 120. Buy after the point cap above.",
      risk: "safe",
    },
  ],
  room: [
    {
      id: "gotr-loop",
      title: "Guardians of the Rift",
      every: "when runes run dry",
      risk: "safe",
    },
  ],
};