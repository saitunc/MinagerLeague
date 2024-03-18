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
function invokeTraining(player: Player): void {
  const currentGoalkeeping = player.goalkeeping_getter;
  const newGoalkeeping = {
      Focus: currentGoalkeeping.Focus * 2,
      Reflex: currentGoalkeeping.Reflex * 2,
      Handling: currentGoalkeeping.Handling * 2,
      Kicking: currentGoalkeeping.Kicking * 2,
      one_on_one: currentGoalkeeping.one_on_one * 2
  };
  player.goalkeeping_setter = newGoalkeeping;
}
