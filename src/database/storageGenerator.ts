import { Team } from "../models/Team"
import { UInt64 } from "o1js"

let mockTeam = new Team("Fenerbahce", UInt64.from(1000))

mockTeam.generateTeam()

console.log(mockTeam.teamPlayersInfo())