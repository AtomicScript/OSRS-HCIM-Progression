import type { Gate } from "@/lib/types";

export const defender: Gate = {
  id: "defender",
  title: "Defender",
  subtitle: "Combat chapter. Dragon defender.",
  keys: [
    {
      id: "melee-65-slayer",
      title: "65 Attack and 65 Strength — Slayer",
      note: "Main melee train. Skip this row if you did NMZ instead.",
      risk: "caution",
    },
    {
      id: "melee-65-nmz",
      title: "65 Attack and 65 Strength — Nightmare Zone",
      note: "AFK option. Skip this row if you trained on Slayer.",
      risk: "safe",
    },
    {
      id: "warriors-guild-def",
      title: "Warriors' Guild — put cyclops XP on Defence",
      note: "Don't dump the tokens into Attack/Strength.",
      risk: "safe",
    },
    {
      id: "mith-armour-tokens",
      title: "200–300 tokens — animated mithril armour",
      note: "Enough to start the defender ladder.",
      risk: "safe",
    },
    {
      id: "defenders-bronze-rune",
      title: "Bronze through rune defender",
      note: "Cyclopes on the top floor.",
      risk: "safe",
    },
    {
      id: "dragon-defender",
      title: "Dragon defender",
      note: "Basement cyclopes. End of this gate.",
      risk: "safe",
    },
  ],
  room: [],
};