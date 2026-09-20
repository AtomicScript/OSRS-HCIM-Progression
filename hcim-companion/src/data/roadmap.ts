import type { Gate } from "@/lib/types";
import { starting } from "./gates/starting";
import { money } from "./gates/money";
import { prayer } from "./gates/prayer";
import { food } from "./gates/food";

export const roadmap: Gate[] = [starting, money, prayer, food];