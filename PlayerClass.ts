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
   goalkeeping: goalkeeping
   personal: personal
   history: history
   current_condition: current_condition
   technical: technical
   physical: physical
   mental: mental
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


}
