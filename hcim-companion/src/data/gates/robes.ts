import type { Gate } from "@/lib/types";

export const robes: Gate = {
  id: "robes",
  title: "Robes",
  subtitle: "Combat chapter. 60 Ranged, 63 Magic, mixed hide and mystic.",
  keys: [
    {
      id: "range-60-crab",
      title: "60 Ranged — Gemstone Crab",
      note: "Dorgeshuun crossbow and bone bolts. Skip if you hit 60 on Scurrius instead.",
      risk: "safe",
    },
    {
      id: "range-60-scurrius",
      title: "60 Ranged — Scurrius",
      note: "Only if you already have a spine for a bone shortbow. Skip if you trained on crabs.",
      risk: "caution",
    },
    {
      id: "magic-63-crab",
      title: "63 Magic — Gemstone Crab",
      note: "AFK option. Skip if you used Scurrius or Slayer.",
      risk: "safe",
    },
    {
      id: "magic-63-scurrius",
      title: "63 Magic — Scurrius",
      note: "Only if you have a spine for a bone staff. Skip otherwise.",
      risk: "caution",
    },
    {
      id: "magic-63-slayer",
      title: "63 Magic — Slayer safespots",
      note: "Safespot any task you can. Skip if crabs or Scurrius got you there.",
      risk: "caution",
    },
    {
      id: "mixed-hide",
      title: "Mixed hide armour",
      note: "Needs 60 Ranged. End piece for this gate.",
      risk: "safe",
    },
    {
      id: "mystic-robes",
      title: "Mystic robes",
      note: "Needs 63 Magic. End piece for this gate.",
      risk: "safe",
    },
  ],
  room: [],
};