import type { Gate } from "@/lib/types";

export const gloves: Gate = {
  id: "gloves",
  title: "Gloves",
  subtitle: "RFD to barrows gloves. After Stats. Then fire cape.",
  keys: [
    // --- stats this path may still be short on ---
    {
      id: "cooking-70",
      title: "70 Cooking (boostable)",
      note: "Awowogei. Do Evil Dave first so orange spicy stew can boost from ~65. Biggest remaining skill.",
      risk: "safe",
    },
    {
      id: "mining-50",
      title: "50 Mining (boostable)",
      note: "You stop at 40 on Motherlode in Gauntlets. Need 50 for Heroes / DT / Legends line.",
      risk: "safe",
    },
    {
      id: "herblore-25",
      title: "25 Herblore (boostable)",
      note: "Heroes' Quest. You only locked Druidic Ritual earlier.",
      risk: "safe",
    },
    {
      id: "qp-175",
      title: "175 quest points",
      note: "Required for the Culinaromancer. RFD parts give some QP; you still need a pile of extra quests.",
      risk: "safe",
    },

    // --- prereqs not already on your rail ---
    {
      id: "murder-mystery",
      title: "Murder Mystery",
      note: "Lumbridge Guide subquest.",
      risk: "safe",
    },
    {
      id: "big-chompy",
      title: "Big Chompy Bird Hunting",
      note: "Lumbridge Guide + Skrach.",
      risk: "safe",
    },
    {
      id: "shield-of-arrav",
      title: "Shield of Arrav",
      note: "Heroes' Quest. Phoenix or Black Arm.",
      risk: "safe",
    },
    {
      id: "heroes-quest",
      title: "Heroes' Quest",
      note: "Sir Amik line. 55 QP, 25 Herb, 50 Mining, 53 Fishing/Cook-ish. Ice gloves here help the dwarf cake too.",
      risk: "caution",
    },
    {
      id: "shilo-village",
      title: "Shilo Village",
      note: "Sir Amik / Legends line.",
      risk: "caution",
    },
    {
      id: "underground-pass",
      title: "Underground Pass",
      note: "Sir Amik / Legends. Long. Don't rush the well on HCIM.",
      risk: "caution",
    },
    {
      id: "legends-started",
      title: "Start Legends' Quest — Kharazi access",
      note: "You do not need to finish Legends. Sir Amik only needs the jungle unlocked.",
      risk: "caution",
    },
    {
      id: "horror-from-the-deep",
      title: "Horror from the Deep",
      note: "Finale prerequisite. Dagannoth mother. Bring a plan.",
      risk: "caution",
    },
    {
      id: "desert-treasure-1",
      title: "Desert Treasure I",
      note: "Finale prerequisite. 53 Thieving (your Money gate), 50 FM, 50 Mining, 59 Magic. Ice/shadow diamonds — caution.",
      risk: "caution",
    },

    // --- Recipe for Disaster itself ---
    {
      id: "rfd-start",
      title: "RFD — Another Cook's Quest",
      note: "Cook's Assistant + 10 Cooking. Watch the feast.",
      risk: "safe",
    },
    {
      id: "rfd-dwarf",
      title: "RFD — Mountain Dwarf",
      note: "Fishing Contest (already on Food). Ice gloves or an icefiend. Rock cake for NMZ.",
      risk: "safe",
    },
    {
      id: "rfd-goblins",
      title: "RFD — Goblin generals",
      note: "Goblin Diplomacy (already on Quests).",
      risk: "safe",
    },
    {
      id: "rfd-pete",
      title: "RFD — Pirate Pete",
      note: "31 Cooking. Underwater crabs. 53 Fishing is on Food. Fishbowl if you craft it.",
      risk: "caution",
    },
    {
      id: "rfd-lumby-guide",
      title: "RFD — Lumbridge Guide",
      note: "40 Cooking. Needs Chompy, Biohazard, Plague City, Demon Slayer, Murder Mystery, Nature Spirit, Priest in Peril, Restless Ghost, Witch's House.",
      risk: "safe",
    },
    {
      id: "rfd-dave",
      title: "RFD — Evil Dave",
      note: "25 Cooking. Gertrude's Cat + Shadow of the Storm. Do this before 70 Cooking so you can stew-boost Awowogei.",
      risk: "safe",
    },
    {
      id: "rfd-skrach",
      title: "RFD — Skrach Uglogwee",
      note: "41 Cooking (not boostable), 20 Firemaking, Chompy. Ogre bow / chompy hunt.",
      risk: "safe",
    },
    {
      id: "rfd-amik",
      title: "RFD — Sir Amik Varze",
      note: "Started Legends (Kharazi). Heroes, Family Crest, Lost City, Merlin, DS1, Shilo, Underground Pass, Waterfall. Kill a black dragon — antifire + shield.",
      risk: "caution",
    },
    {
      id: "rfd-awowogei",
      title: "RFD — King Awowogei",
      note: "70 Cooking (boostable), 48 Agility (you have 50), Monkey Madness I. Ape Atoll greegrees. Snake fight.",
      risk: "caution",
    },
    {
      id: "rfd-finale",
      title: "RFD — Culinaromancer",
      note: "All 8 frees + 175 QP + DT1 + Horror from the Deep. Several fights with no prayer. Stats gate should already be done.",
      risk: "caution",
    },
    {
      id: "barrows-gloves",
      title: "Buy barrows gloves",
      note: "Culinaromancer's Chest, 130k. End of this gate.",
      risk: "safe",
    },
  ],
  room: [
    {
      id: "herb-run",
      title: "Herb run",
      every: "80m",
      risk: "safe",
    },
  ],
};