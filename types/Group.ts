import { Match } from "./Match";
import { TeamInGroup } from "./TeamInGroup";

export interface Group {
    groupId: number;
    teams: { [teamName: string]: TeamInGroup };
    matches: { [matchName: string]: Match};
  }