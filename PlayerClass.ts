//grouped properties by using interface
interface goalkeeping {
  Focus: number;
  Reflex: number;
  Handling: number;
  Kicking: number;
  one_on_one: number
}
interface personal {
  Name: string;
  Age: number;
  Position: string;
}
interface history {
  Goals: number;
  Passes: number;
  Assists: number;
  Matches_played: number;
}
interface current_condition {
  isInjured: boolean;
  Yellow_Card: number;
  Red_Card: boolean;
  isTraining: boolean;
  Motivation: number;
  Fitness: number;
  Stamina: number;
}
interface technical {
  Corner: number;
  Dribbling: number;
  Passing: number;
  Finishing: number;
  Ball_control: number;
  Free_kick: number;
  Tackling: number;
}
interface physical {
  Speed: number;
  Agility: number;
  Endurance: number;
  Strength: number;
}
interface mental {
  Aggression: number;
  Bravery: number;
  Intelligence: number;
  Leadership: number;
}

class Player{
  private goalkeeping: goalkeeping
  private personal: personal
  private history: history
  private current_condition: current_condition
  private technical: technical
  private physical: physical
  private mental: mental
  constructor(
    Focus: number = 1,
    Reflex: number = 1,
    Handling: number = 1,
    Kicking: number = 1,
    one_on_one: number = 1,
    Name: string = "Joe",
    Age: number = 1,
    Position: string = "defense",
    Goals: number = 0,
    Passes: number = 0,
    Assists: number = 0,
    Matches_played: number = 0,
    isInjured: boolean = false,
    Yellow_Card: number = 0,
    Red_Card: boolean = false,
    isTraining: boolean = false,
    Motivation: number = 1, 
    Fitness: number = 1,
    Stamina: number = 1,
    Corner: number = 1,
    Dribbling: number = 1,
    Passing: number = 1,
    Finishing: number = 1,
    Ball_control: number = 1,
    Free_kick: number = 1,
    Tackling: number = 1, 
    Speed: number = 1,
    Agility: number = 1,
    Endurance: number = 1,
    Strength: number = 1,
    Aggression: number = 1,
    Bravery: number = 1,
    Intelligence: number = 1,
    Leadership: number = 1
    ) {
   this.goalkeeping= {
    Focus: Focus,
    Reflex: Reflex,
    Handling: Handling,
    Kicking: Kicking,
    one_on_one: one_on_one
   }
   this.personal = {
    Name,
    Age,
    Position
   }
   this.history = {
    Goals: Goals,
    Passes: Passes,
    Assists: Assists,
    Matches_played: Matches_played
  };
  this.current_condition = {
    isInjured: isInjured,
    Yellow_Card: Yellow_Card,
    Red_Card: Red_Card,
    isTraining: isTraining,
    Motivation: Motivation,
    Fitness: Fitness,
    Stamina: Stamina
  };
  this.technical = {
    Corner: Corner,
    Dribbling: Dribbling,
    Passing: Passing,
    Finishing: Finishing,
    Ball_control: Ball_control,
    Free_kick: Free_kick,
    Tackling: Tackling
  };
  this.physical = {
    Speed: Speed,
    Agility: Agility,
    Endurance: Endurance,
    Strength: Strength
  };
  this.mental = {
    Aggression: Aggression,
    Bravery: Bravery,
    Intelligence: Intelligence,
    Leadership: Leadership
  };
  }

  //goalkeeping getter - setter
  get goalkeeping_getter(){
    return(this.goalkeeping)
  }
  set goalkeeping_setter(new_goalkeeping : goalkeeping) {
    this.goalkeeping = new_goalkeeping;
  }

  //personal setter- getter
  set personal_setter(new_personal: personal) {
    this.personal = new_personal;
  }  
  get personal_getter(): personal {
    return this.personal;
  }

  //history setter- getter
  set history_setter(new_history: history) {
    this.history = new_history;
  } 
  get history_getter(): history {
    return this.history;
  }

  //current_condition setter- getter
   set current_condition_setter(new_current_condition: current_condition) {
        this.current_condition = new_current_condition;
  }
  get current_condition_getter(): current_condition {
        return this.current_condition;
  }

  //technical setter- getter
  set technical_setter(new_technical: technical) {
        this.technical = new_technical;
  }
  get technical_getter(): technical {
    return this.technical;
  } 
    
  //mental setter- getter
  set mental_setter(new_mental: mental) {
        this.mental = new_mental;
  }
  get mental_getter(): mental {
    return this.mental;
  } 

  //physical setter- getter
  set physical_setter(new_physical: physical) {
        this.physical = new_physical;
  }
  get physical_getter(): physical {
    return this.physical;
  }
  setCombined(newData: { mental?: mental, physical?: physical, technical?: technical, goalkeeping?:goalkeeping }) {
     if (newData.mental) {
         this.mental = newData.mental;
     }
     if (newData.physical) {
         this.physical = newData.physical;
     }
  }
    
}

function gaussianRandom(mean: number, stdev: number, roundhalf: boolean) {
   const u = 1 - Math.random();
   const v = Math.random();
   const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
   //z distribution
   if (roundhalf == false){
    return z * stdev + mean
   }
   else {
    //0.5, 0.0 rounder
    return(Math.round((z * stdev + mean) * 2)/2)
   }
   
 }

function invokeTraining(player: Player) {
  const newGoalkeeping = {
    mental: player.mental_getter,
    physical: player.physical_getter,
    technical: player.technical_getter,
    goalkeeping: player.goalkeeping_getter
  }
  for (const key in newGoalkeeping) {
      for (const key1 in newGoalkeeping[key]) {
        newGoalkeeping[key][key1] = gaussianRandom(3,1.5,true) + newGoalkeeping[key][key1]
      }
  }
    player.setCombined (newGoalkeeping)
  return(player);
}

function randomBoolean(){
  return(Math.random()<0.5)
}

//an age variable will be added to generate player to simulate age - performance relation
function generatePlayer () {
  let newPlayer = new Player()
  const new_goalkeeping  = {
     mental: newPlayer.mental_getter,
     physical: newPlayer.physical_getter,
     technical: newPlayer.technical_getter,
     goalkeeping: newPlayer.goalkeeping_getter
  } 
  for (const key in new_goalkeeping) {
     for(const key1 in new_goalkeeping[key]){
        new_goalkeeping[key][key1] = Math.min(gaussianRandom(80,10,true), 100)
     }
  }
    newPlayer.setCombined (new_goalkeeping)
    return(newPlayer)
}
