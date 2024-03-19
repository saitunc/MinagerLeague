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
    Focus: number,
    Reflex: number,
    Handling: number,
    Kicking: number,
    one_on_one: number,
    Name: string,
    Age: number,
    Position: string,
    Goals: number,
    Passes: number,
    Assists: number,
    Matches_played: number,
    isInjured: boolean,
    Yellow_Card: number,
    Red_Card: boolean,
    isTraining: boolean,
    Motivation: number,
    Fitness: number,
    Stamina: number,
    Corner: number,
    Dribbling: number,
    Passing: number,
    Finishing: number,
    Ball_control: number,
    Free_kick: number,
    Tackling: number,
    Speed: number,
    Agility: number,
    Endurance: number,
    Strength: number,
    Aggression: number,
    Bravery: number,
    Intelligence: number,
    Leadership: number
    ) {
   this.goalkeeping= {
    Focus,
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

function randomBoolean(){
  return(Math.random()<0.5)
}


function invokeTraining(player: Player) {
  const newGoalkeeping = {}
  for (const key in player.goalkeeping_getter) {
      newGoalkeeping[key] = gaussianRandom(3,1.5,true) + player.goalkeeping_getter[key]
  }
  let newGoalkeeping1 = newGoalkeeping as goalkeeping
return(player.goalkeeping_setter = newGoalkeeping1);
}

//to be corrected
function generatePlayer () {
  const newGoalkeeping = {}
  for (const key in player.goalkeeping_getter) {
      newGoalkeeping[key] = gaussianRandom(80,10,true)
  }
  let newGoalkeeping1 = newGoalkeeping as goalkeeping
}
