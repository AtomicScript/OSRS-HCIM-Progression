import type { Gate } from "@/lib/types";
import { starting } from "./gates/starting";
import { money } from "./gates/money";
import { prayer } from "./gates/prayer";
import { food } from "./gates/food";
import { helms } from "./gates/helms";
import { gauntlets } from "./gates/gauntlets";
import { defender } from "./gates/defender";
import { quests } from "./gates/quests";
import { robes } from "./gates/robes";
import { mta } from "./gates/mta";
import { stats } from "./gates/stats";
import { utilities } from "./gates/utilities";
import { gloves } from "./gates/gloves";

export const roadmap: Gate[] = [
    starting,
    money,
    prayer,
    food,
    utilities,
    quests,
    helms,
    gauntlets,
    defender,
    robes,
    mta,
    stats,
    gloves,
];