import { Team } from "./models/Team"

let takim = new Team("team1")
takim.generateTeam()
console.log(takim.players[1].personal_getter)