import type { Gate } from "@/lib/types";

export const quests: Gate = {
  id: "quests",
  title: "Combat Quests",
  subtitle: "Combat chapter. Early gear and a better NMZ setup.",
  keys: [
    {
      id: "rfd-mountain-dwarf",
      title: "Recipe for Disaster — Mountain Dwarf",
      note: "Rock cake for NMZ.",
      risk: "safe",
    },
    {
      id: "in-aid-of-the-myreque",
      title: "In Aid of the Myreque",
      note: "Morytania / gear line.",
      risk: "caution",
    },
    {
      id: "depth-of-despair",
      title: "The Depths of Despair",
      note: "Kourend line.",
      risk: "safe",
    },
    {
      id: "fight-arena",
      title: "Fight Arena",
      note: "Cheap combat XP.",
      risk: "safe",
    },
    {
      id: "grand-tree",
      title: "The Grand Tree",
      note: "Combat XP and transport.",
      risk: "safe",
    },
    {
      id: "merlin-crystal",
      title: "Merlin's Crystal",
      note: "Required for Holy Grail.",
      risk: "safe",
    },
    {
      id: "holy-grail",
      title: "Holy Grail",
      note: "Combat XP.",
      risk: "safe",
    },
    {
      id: "dragon-slayer-1",
      title: "Dragon Slayer I",
      note: "Rune platebody / anti-dragon shield line. Elvarg is a real fight.",
      risk: "caution",
    },
    {
      id: "monkey-madness-1",
      title: "Monkey Madness I",
      note: "Dragon scimitar. Jungle demon is the danger.",
      risk: "caution",
    },
    {
      id: "goblin-diplomacy",
      title: "Goblin Diplomacy",
      note: "Dorgeshuun line.",
      risk: "safe",
    },
    {
      id: "lost-tribe",
      title: "The Lost Tribe",
      note: "Dorgeshuun line.",
      risk: "safe",
    },
    {
      id: "death-to-the-dorgeshuun",
      title: "Death to the Dorgeshuun",
      note: "Bone crossbow / ham line.",
      risk: "safe",
    },
    {
      id: "the-golem",
      title: "The Golem",
      note: "Toward Shadow of the Storm.",
      risk: "safe",
    },
    {
      id: "shadow-of-the-storm",
      title: "Shadow of the Storm",
      note: "Silverlight → Darklight. Good NMZ quest.",
      risk: "caution",
    },
    {
      id: "icthlarins-little-helper",
      title: "Icthlarin's Little Helper",
      note: "Toward Contact!",
      risk: "caution",
    },
    {
      id: "prince-ali-rescue",
      title: "Prince Ali Rescue",
      note: "Toward Contact!",
      risk: "safe",
    },
    {
      id: "contact",
      title: "Contact!",
      note: "Keris. End of this gate.",
      risk: "caution",
    },
    {
      id: "ernest-the-chicken",
      title: "Ernest the Chicken",
      note: "Same id as Survive if you already ticked it there. Needed for Animal Magnetism.",
      risk: "safe",
    },
    {
      id: "animal-magnetism",
      title: "Animal Magnetism",
      note: "Ava's accumulator. Strong NMZ / range unlock.",
      risk: "safe",
    },
  ],
  room: [],
};