import { gaussianRandom } from "./stats/utils";
import { Player } from "../models/Player";
import { footballPlayerNames } from "../models/player_test";
import { Team } from "../models/Team";
import { UInt64 } from "o1js";
import { afterPositioning } from "../models/interfaces";

export function generatePlayer(place:string, side: string = "mid"){
    let newPlayer = new Player()
        let attributes  = {
      mental: newPlayer.mental_getter,
      physical: newPlayer.physical_getter,
      technical: newPlayer.technical_getter,
      goalkeeping: newPlayer.goalkeeping_getter
    } 
    switch(place){
      case "goalkeeper":
          attributes.goalkeeping.Focus = Math.min(gaussianRandom(70, 5, true), 100);
          attributes.goalkeeping.Reflex = Math.min(gaussianRandom(75, 5, true), 100);
          attributes.goalkeeping.Handling = Math.min(gaussianRandom(75, 4, true), 100);
          attributes.goalkeeping.Kicking = Math.min(gaussianRandom(60, 5, true), 100);
          attributes.goalkeeping.one_on_one = Math.min(gaussianRandom(75, 5, true), 100);
          
          attributes.technical.Corner = Math.min(gaussianRandom(10, 4, true), 100);
          attributes.technical.Dribbling = Math.min(gaussianRandom(15, 4, true), 100);
          attributes.technical.Passing = Math.min(gaussianRandom(20, 4, true), 100);
          attributes.technical.Finishing = Math.min(gaussianRandom(10, 4, true), 100);
          attributes.technical.Ball_control = Math.min(gaussianRandom(20, 4, true), 100);
          attributes.technical.Free_kick = Math.min(gaussianRandom(15, 4, true), 100);
          attributes.technical.Tackling = Math.min(gaussianRandom(30, 5, true), 100);
          
          attributes.physical.Speed = Math.min(gaussianRandom(30, 4, true), 100);
          attributes.physical.Agility = Math.min(gaussianRandom(35, 4, true), 100);
          attributes.physical.Endurance = Math.min(gaussianRandom(50, 5, true), 100);
          attributes.physical.Strength = Math.min(gaussianRandom(45, 5, true), 100);
          
          attributes.mental.Aggression = Math.min(gaussianRandom(40, 4, true), 100);
          attributes.mental.Bravery = Math.min(gaussianRandom(45, 4, true), 100);
          attributes.mental.Intelligence = Math.min(gaussianRandom(50, 4, true), 100);
          attributes.mental.Leadership = Math.min(gaussianRandom(50, 4, true), 100);
          break;
          
    case "defense":
      attributes.goalkeeping.Focus = Math.min(gaussianRandom(40, 5, true), 100);
      attributes.goalkeeping.Reflex = Math.min(gaussianRandom(45, 5, true), 100);
      attributes.goalkeeping.Handling = Math.min(gaussianRandom(35, 4, true), 100);
      attributes.goalkeeping.Kicking = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.goalkeeping.one_on_one = Math.min(gaussianRandom(45, 5, true), 100);
  
      attributes.technical.Corner = Math.min(gaussianRandom(30, 5, true), 100);
      attributes.technical.Dribbling = Math.min(gaussianRandom(20, 4, true), 100);
      attributes.technical.Passing = Math.min(gaussianRandom(35, 5, true), 100);
      attributes.technical.Finishing = Math.min(gaussianRandom(25, 4, true), 100);
      attributes.technical.Ball_control = Math.min(gaussianRandom(30, 4, true), 100);
      attributes.technical.Free_kick = Math.min(gaussianRandom(60, 4, true), 100);
      attributes.technical.Tackling = Math.min(gaussianRandom(70, 5, true), 100);
  
      attributes.physical.Speed = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.physical.Agility = Math.min(gaussianRandom(40, 5, true), 100);
      attributes.physical.Endurance = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.physical.Strength = Math.min(gaussianRandom(60, 5, true), 100);
  
      attributes.mental.Aggression = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.mental.Bravery = Math.min(gaussianRandom(45, 5, true), 100);
      attributes.mental.Intelligence = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.mental.Leadership = Math.min(gaussianRandom(40, 4, true), 100);
      break;
    case "midfielder":
      attributes.goalkeeping.Focus = Math.min(gaussianRandom(35, 5, true), 100);
      attributes.goalkeeping.Reflex = Math.min(gaussianRandom(30, 5, true), 100);
      attributes.goalkeeping.Handling = Math.min(gaussianRandom(25, 4, true), 100);
      attributes.goalkeeping.Kicking = Math.min(gaussianRandom(45, 5, true), 100);
      attributes.goalkeeping.one_on_one = Math.min(gaussianRandom(30, 5, true), 100);
  
      attributes.technical.Corner = Math.min(gaussianRandom(40, 5, true), 100);
      attributes.technical.Dribbling = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.technical.Passing = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.technical.Finishing = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.technical.Ball_control = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.technical.Free_kick = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.technical.Tackling = Math.min(gaussianRandom(45, 5, true), 100);
  
      attributes.physical.Speed = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.physical.Agility = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.physical.Endurance = Math.min(gaussianRandom(65, 5, true), 100);
      attributes.physical.Strength = Math.min(gaussianRandom(45, 5, true), 100);
  
      attributes.mental.Aggression = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.mental.Bravery = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.mental.Intelligence = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.mental.Leadership = Math.min(gaussianRandom(50, 4, true), 100);
      break;
    case "attack":
      attributes.goalkeeping.Focus = Math.min(gaussianRandom(30, 5, true), 100);
      attributes.goalkeeping.Reflex = Math.min(gaussianRandom(35, 5, true), 100);
      attributes.goalkeeping.Handling = Math.min(gaussianRandom(25, 4, true), 100);
      attributes.goalkeeping.Kicking = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.goalkeeping.one_on_one = Math.min(gaussianRandom(35, 5, true), 100);
  
      attributes.technical.Corner = Math.min(gaussianRandom(75, 5, true), 100);
      attributes.technical.Dribbling = Math.min(gaussianRandom(70, 5, true), 100);
      attributes.technical.Passing = Math.min(gaussianRandom(65, 5, true), 100);
      attributes.technical.Finishing = Math.min(gaussianRandom(70, 5, true), 100);
      attributes.technical.Ball_control = Math.min(gaussianRandom(70, 5, true), 100);
      attributes.technical.Free_kick = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.technical.Tackling = Math.min(gaussianRandom(30, 5, true), 100);
  
      attributes.physical.Speed = Math.min(gaussianRandom(65, 5, true), 100);
      attributes.physical.Agility = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.physical.Endurance = Math.min(gaussianRandom(55, 5, true), 100);
      attributes.physical.Strength = Math.min(gaussianRandom(40, 5, true), 100);
  
      attributes.mental.Aggression = Math.min(gaussianRandom(60, 5, true), 100);
      attributes.mental.Bravery = Math.min(gaussianRandom(65, 5, true), 100);
      attributes.mental.Intelligence = Math.min(gaussianRandom(50, 5, true), 100);
      attributes.mental.Leadership = Math.min(gaussianRandom(40, 5, true), 100);
      break;
    } 
      newPlayer.setCombined(attributes)
      newPlayer.personal_setter = {
        Name: footballPlayerNames[Math.floor(Math.random() * footballPlayerNames.length)],
        Age: Math.round(Math.max(gaussianRandom(27,5,false), 17)),
        Position: place,
        Side: side
      }
      return(newPlayer)
  }  
  