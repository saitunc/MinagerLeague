import { Player } from "./Player"
import { afterPositioning } from "./interfaces"
import { generatePlayer } from "../utils/generators"
import { UInt64 } from "o1js"

export class Team {
    teamName: string
    money: UInt64
    players: Player[]
    positionPairs: afterPositioning[]
  
    constructor(teamName: string,
                money: UInt64 = UInt64.from(1000)) {
        this.teamName = teamName;
        this.players = [];
        this.money = money;
        this.positionPairs = [];
    }
  
    addPlayer(player: Player) {
        this.players.push(player); // Add player to the team
    }
  
    generateTeam() {
        for (var i = 0; i < 2; i++) {
            this.addPlayer(generatePlayer("goalkeeper"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer(generatePlayer("defense", "left"));
        }
        for (var i = 0; i < 2; i++) {
          this.addPlayer(generatePlayer("defense", "mid"));
        }
        for (var i = 0; i < 2; i++) {
        this.addPlayer(generatePlayer("defense", "right"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer(generatePlayer("midfielder", "right"));
        }
        for (var i = 0; i < 2; i++) {
          this.addPlayer(generatePlayer("midfielder", "left"));
        }
        for (var i = 0; i < 2; i++) {
        this.addPlayer(generatePlayer("midfielder", "mid"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer(generatePlayer("attack", "right"));
        }
        for (var i = 0; i < 2; i++) {
          this.addPlayer(generatePlayer("attack", "right"));
        }
        for (let i = 0; i < 2; i++) {
          this.addPlayer(generatePlayer("attack", "right"));
        }
        
    }
  
    positioning(x: number, y: number, player: Player){
      let vertical = ["goalkeeper", "defense", "midfielder", "attack"]
  
      const technicalSum = Object.values(player.technical_getter).reduce((acc, value) => acc + value, 0);
      const technicallen = Object.keys(player.technical_getter).length;
      const goalkeepingSum = Object.values(player.goalkeeping_getter).reduce((acc, value) => acc + value, 0);
      const goalkeepinglen = Object.keys(player.goalkeeping_getter).length;
      const phsicalSum = Object.values(player.physical_getter).reduce((acc, value) => acc + value, 0);
      const physicallen = Object.keys(player.physical_getter).length;
      const mentalSum = Object.values(player.mental_getter).reduce((acc, value) => acc + value, 0);
      const mentallen = Object.keys(player.mental_getter).length;
      const mean_stat = (technicalSum + goalkeepingSum + phsicalSum +mentalSum) / (technicallen+ goalkeepinglen + physicallen + mentallen)
  
      if (((x<70)&&(x>0))&&((y<70)&&(y>0))){
        if (((x<20)&&(x>0))&&((y<10)&&(y>0))||((x<70)&&(x>50))&&((y<10)&&(y>0))){
          console.log("can not put your player here")
        }
      
        else if (((x<50)&&(x>20))&&((y<10)&&(y>0))){
  
          let index_ver = vertical.findIndex(item => item === player.personal_getter.Position);
  
          const point = mean_stat* (1-0.2*Math.abs(0-index_ver))
          
        }
       
      }
      else console.log("Error")
    }

    teamPlayersInfo() {
      return this.players.length
    } 
  }
  