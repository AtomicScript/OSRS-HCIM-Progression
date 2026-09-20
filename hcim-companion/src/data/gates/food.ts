import type { Gate } from "@/lib/types";

export const food: Gate = {
  id: "food",
  title: "Food",
  subtitle: "Survive chapter. Karambwans",
  keys: [
    {
      id: "sea-slug",
      title: "Sea Slug",
      note: "Unlocking karambwans",
      risk: "safe",
    },
    {
      id: "fishing-contest",
      title: "Fishing Contest",
      note: "Unlocking karambwans",
      risk: "safe",
    },
    {
      id: "fishing-35-barb",
      title: "35 Fishing — salmon and trout",
      note: "Barbarian Village. Cook what you catch.",
      risk: "safe",
    },
    {
      id: "tempoross-65",
      title: "65 Fishing — Tempoross",
      note: "Solo preferred, mass okay. Minigame deaths are safe; poison/venom still is not.",
      risk: "safe",
    },
    {
      id: "cook-tempoross-fish",
      title: "Cook the Tempoross reward-pool fish",
      note: "Don't leave the raw stack sitting.",
      risk: "safe",
    },
    {
      id: "jungle-potion",
      title: "Jungle Potion",
      note: "Toward Tai Bwo Wannai Trio.",
      risk: "safe",
    },
    {
      id: "agility-pots-tarn",
      title: "Two agility potions (2) — ~50 skeletons",
      note: "Near Tarn's Lair. Caution on the walk and the room.",
      risk: "caution",
    },
    {
      id: "tai-bwo-wannai-trio",
      title: "Tai Bwo Wannai Trio",
      note: "This is the karambwan unlock.",
      risk: "caution",
    },
    {
      id: "karambwanji-stack",
      title: "Catch a few thousand karambwanji",
      note: "Bait for karambwan.",
      risk: "safe",
    },
    {
      id: "karambwan-stock",
      title: "Catch and cook a decent karambwan stack",
      note: "Gate complete when food is no longer the blocker.",
      risk: "safe",
    },
  ],
  room: [],
};