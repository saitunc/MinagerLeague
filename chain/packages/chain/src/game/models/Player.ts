import { 
  goalkeeping,
  personal,
  history,
  current_condition,
  technical,
  physical,
  mental,
 } from "./interfaces.js"

export class Player{
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
    Side: string = "right",
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
    Name: Name,
    Age: Age,
    Position: Position,
    Side: Side
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
        if (newData.technical) {
            this.technical = newData.technical;
        }
        if (newData.goalkeeping) {
            this.goalkeeping = newData.goalkeeping;
        }
    }
    
  }
