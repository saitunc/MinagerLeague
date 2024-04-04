import { Player } from "./Player";
import { gaussianRandom } from "../utils/stats/utils";


export function invokeTraining(player: Player, training_type : String) {
    let newGoalkeeping = {
      mental: player.mental_getter,
      physical: player.physical_getter,
      technical: player.technical_getter,
      goalkeeping: player.goalkeeping_getter
    }

    let choice_index = Object.keys(newGoalkeeping);
    console.log(choice_index);
    

    if (training_type === 'mental'){
       Object.values(newGoalkeeping.mental).forEach((e)=>{
        e = Math.min((gaussianRandom(3, 1.5, true) + e), 100)
       })
    }

      player.setCombined (newGoalkeeping)
    return(player);
    }


export class Trainer{
    name: String;
    profession: String;

    constructor(name:String, profession : 'Technical' | 'Physical' | 'Mental'){
        this.name = name;
        this.profession = profession
    }

    train_player(player: Player ){
    }

}   

