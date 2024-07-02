import { Match } from "./Match";
import { Standings } from "./Standings";

export interface Group {
  groupId: number;
  displayName: string;
  teams: number[];
  stats: { [teamId: number]: Standings };
  matches: { [matchName: string]: Match };
}
