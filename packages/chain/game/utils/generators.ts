import { gaussianRandom } from "./stats/utils";
import { Player } from "../models/Player";
import { footballPlayerNames } from "../models/player_test";
import { Team } from "../models/Team";
import { UInt64 } from "o1js";
import { afterPositioning } from "../models/interfaces";
import { CircuitString } from "o1js";
export function generatePlayer(place:string, side: string = "mid"){
    let newPlayer = new Player(); // A default Player.

      let attributes  = {
      mental: newPlayer.mental_getter(),
      physical: newPlayer.physical_getter(),
      technical: newPlayer.technical_getter(),
      goalkeeping: newPlayer.goalkeeping_getter()
    } 

    switch(place){
      case "goalkeeper":
          attributes.goalkeeping.Focus = UInt64.from(Math.floor(Math.min(gaussianRandom(70, 5, true), 100)));
          attributes.goalkeeping.Reflex = UInt64.from(Math.floor(Math.min(gaussianRandom(75, 5, true), 100)));
          attributes.goalkeeping.Handling = UInt64.from(Math.floor(Math.min(gaussianRandom(75, 4, true), 100)));
          attributes.goalkeeping.Kicking = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
          attributes.goalkeeping.one_on_one = UInt64.from(Math.floor(Math.min(gaussianRandom(75, 5, true), 100)));
          
          attributes.technical.Corner = UInt64.from(Math.floor(Math.min(gaussianRandom(10, 4, true), 100)));
          attributes.technical.Dribbling = UInt64.from(Math.floor(Math.min(gaussianRandom(15, 4, true), 100)));
          attributes.technical.Passing = UInt64.from(Math.floor(Math.min(gaussianRandom(20, 4, true), 100)));
          attributes.technical.Finishing = UInt64.from(Math.floor(Math.min(gaussianRandom(10, 4, true), 100)));
          attributes.technical.Ball_control = UInt64.from(Math.floor(Math.min(gaussianRandom(20, 4, true), 100)));
          attributes.technical.Free_kick = UInt64.from(Math.floor(Math.min(gaussianRandom(15, 4, true), 100)));
          attributes.technical.Tackling = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
          
          attributes.physical.Speed = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 4, true), 100)));
          attributes.physical.Agility = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 4, true), 100)));
          attributes.physical.Endurance = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
          attributes.physical.Strength = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
          
          attributes.mental.Aggression = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 4, true), 100)));
          attributes.mental.Bravery = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 4, true), 100)));
          attributes.mental.Intelligence = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 4, true), 100)));
          attributes.mental.Leadership = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 4, true), 100)));
          break;
          
    case "defense":
      attributes.goalkeeping.Focus = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 5, true), 100)));
      attributes.goalkeeping.Reflex = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
      attributes.goalkeeping.Handling = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 4, true), 100)));
      attributes.goalkeeping.Kicking = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.goalkeeping.one_on_one = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
  
      attributes.technical.Corner = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
      attributes.technical.Dribbling = UInt64.from(Math.floor(Math.min(gaussianRandom(20, 4, true), 100)));
      attributes.technical.Passing = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 5, true), 100)));
      attributes.technical.Finishing = UInt64.from(Math.floor(Math.min(gaussianRandom(25, 4, true), 100)));
      attributes.technical.Ball_control = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 4, true), 100)));
      attributes.technical.Free_kick = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 4, true), 100)));
      attributes.technical.Tackling = UInt64.from(Math.floor(Math.min(gaussianRandom(70, 5, true), 100)));
  
      attributes.physical.Speed = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.physical.Agility = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 5, true), 100)));
      attributes.physical.Endurance = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.physical.Strength = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
  
      attributes.mental.Aggression = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.mental.Bravery = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
      attributes.mental.Intelligence = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.mental.Leadership = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 4, true), 100)));
      break;
    case "midfielder":
      attributes.goalkeeping.Focus = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 5, true), 100)));
      attributes.goalkeeping.Reflex = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
      attributes.goalkeeping.Handling = UInt64.from(Math.floor(Math.min(gaussianRandom(25, 4, true), 100)));
      attributes.goalkeeping.Kicking = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
      attributes.goalkeeping.one_on_one = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
  
      attributes.technical.Corner = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 5, true), 100)));
      attributes.technical.Dribbling = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.technical.Passing = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.technical.Finishing = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.technical.Ball_control = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.technical.Free_kick = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.technical.Tackling = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
  
      attributes.physical.Speed = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.physical.Agility = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.physical.Endurance = UInt64.from(Math.floor(Math.min(gaussianRandom(65, 5, true), 100)));
      attributes.physical.Strength = UInt64.from(Math.floor(Math.min(gaussianRandom(45, 5, true), 100)));
  
      attributes.mental.Aggression = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.mental.Bravery = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.mental.Intelligence = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.mental.Leadership = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 4, true), 100)));
      break;
    case "attack":
      attributes.goalkeeping.Focus = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
      attributes.goalkeeping.Reflex = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 5, true), 100)));
      attributes.goalkeeping.Handling = UInt64.from(Math.floor(Math.min(gaussianRandom(25, 4, true), 100)));
      attributes.goalkeeping.Kicking = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.goalkeeping.one_on_one = UInt64.from(Math.floor(Math.min(gaussianRandom(35, 5, true), 100)));
  
      attributes.technical.Corner = UInt64.from(Math.floor(Math.min(gaussianRandom(75, 5, true), 100)));
      attributes.technical.Dribbling = UInt64.from(Math.floor(Math.min(gaussianRandom(70, 5, true), 100)));
      attributes.technical.Passing = UInt64.from(Math.floor(Math.min(gaussianRandom(65, 5, true), 100)));
      attributes.technical.Finishing = UInt64.from(Math.floor(Math.min(gaussianRandom(70, 5, true), 100)));
      attributes.technical.Ball_control = UInt64.from(Math.floor(Math.min(gaussianRandom(70, 5, true), 100)));
      attributes.technical.Free_kick = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.technical.Tackling = UInt64.from(Math.floor(Math.min(gaussianRandom(30, 5, true), 100)));
  
      attributes.physical.Speed = UInt64.from(Math.floor(Math.min(gaussianRandom(65, 5, true), 100)));
      attributes.physical.Agility = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.physical.Endurance = UInt64.from(Math.floor(Math.min(gaussianRandom(55, 5, true), 100)));
      attributes.physical.Strength = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 5, true), 100)));
  
      attributes.mental.Aggression = UInt64.from(Math.floor(Math.min(gaussianRandom(60, 5, true), 100)));
      attributes.mental.Bravery = UInt64.from(Math.floor(Math.min(gaussianRandom(65, 5, true), 100)));
      attributes.mental.Intelligence = UInt64.from(Math.floor(Math.min(gaussianRandom(50, 5, true), 100)));
      attributes.mental.Leadership = UInt64.from(Math.floor(Math.min(gaussianRandom(40, 5, true), 100)));
      break;
    } 
      newPlayer.setCombined(attributes)
      newPlayer.personal_setter({
        Name: footballPlayerNames[Math.floor(Math.random() * footballPlayerNames.length)],
        Age: UInt64.from(Math.round(Math.max(gaussianRandom(27,5,false), 17))),
        Position: place,
        Side: side
      })
      return(newPlayer)
  }  
  