import { Team } from "../models/Team"
import { UInt64 } from "o1js"


describe("balances", () => {
    it("should demonstrate how balances work", async () => {

        let mockTeam = new Team("Fenerbahce", UInt64.from(1000))

        mockTeam.teamPlayersInfo()

        mockTeam.generateTeam()

        mockTeam.teamPlayersInfo()
    }, 1_000_000);
  });
  