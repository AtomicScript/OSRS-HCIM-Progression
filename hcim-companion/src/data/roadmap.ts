import type { Gate } from "@/lib/types";

export const roadmap: Gate[] = [
  {
    id: "survive",
    title: "Survive",
    subtitle: "Stay hardcore. Get protection prayers.",
    keys: [
      {
        id: "pray-43",
        title: "43 Prayer",
        note: "Protect prayers. First real insurance.",
        risk: "safe",
      },
      {
        id: "food-source",
        title: "Reliable food source",
        note: "Fish, cook, or farm something you will actually eat.",
        risk: "safe",
      },
    ],
    room: [],
  },
  {
    id: "move",
    title: "Move",
    subtitle: "Cross the map without walking into deaths.",
    keys: [
      {
        id: "glory",
        title: "Amulet of glory",
        note: "Edgeville, Draynor, Karamja, Al Kharid.",
        risk: "caution",
      },
      {
        id: "dueling",
        title: "Ring of dueling",
        note: "Castle Wars / Ferox for energy.",
        risk: "safe",
      },
    ],
    room: [],
  },
  {
    id: "hands",
    title: "Hands",
    subtitle: "First real combat kit.",
    keys: [
      {
        id: "barrows-gloves",
        title: "Barrows gloves",
        note: "Recipe for Disaster.",
        risk: "caution",
      },
    ],
    room: [
      { id: "herb-run", title: "Herb run", every: "80m", risk: "safe" },
      { id: "birdhouses", title: "Birdhouses", every: "50m", risk: "safe" },
    ],
  },
  {
    id: "house",
    title: "House",
    subtitle: "Leave any fight.",
    keys: [
      {
        id: "poh",
        title: "House tabs + a usable POH",
        note: "Restore and teleports.",
        risk: "safe",
      },
    ],
    room: [{ id: "herb-run-2", title: "Herb run", every: "80m", risk: "safe" }],
  },
  {
    id: "cape",
    title: "Cape",
    subtitle: "Optional. Fire cape when you mean it.",
    keys: [
      {
        id: "fire-cape",
        title: "Fire cape",
        note: "Fight Cave deaths are safe. Still respect the fight.",
        risk: "caution",
      },
    ],
    room: [],
  },
];