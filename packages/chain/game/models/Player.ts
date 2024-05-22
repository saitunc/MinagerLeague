import { UInt64, Bool, Struct } from "o1js";
import { 
  goalkeeping,
  personal,
  history,
  current_condition,
  technical,
  physical,
  mental,
 } from "./interfaces.js"

export class Player {
  GoalKeeping: goalkeeping;
  Personal: personal;
  History: history;
  CurrentCondition: current_condition;
  Technical: technical;
  Physical: physical;
  Mental: mental;



  constructor(
    Focus: UInt64 = UInt64.from(UInt64.from(1)),
    Reflex: UInt64 = UInt64.from(1),
    Handling: UInt64 = UInt64.from(1),
    Kicking: UInt64 = UInt64.from(1),
    one_on_one: UInt64 = UInt64.from(1),
    Name: string = "Joe",
    Age: UInt64 = UInt64.from(1),
    Position: string = "defense",
    Side: string = "right",
    Goals: UInt64 = UInt64.from(0),
    Passes: UInt64 = UInt64.from(0),
    Assists: UInt64 = UInt64.from(0),
    Matches_played: UInt64 = UInt64.from(0),
    isInjured: Bool = Bool(false), 
    Yellow_Card: UInt64 = UInt64.from(0),
    Red_Card: Bool = Bool(false),
    isTraining: Bool = Bool(false),
    Motivation: UInt64 = UInt64.from(1), 
    Fitness: UInt64 = UInt64.from(1),
    Stamina: UInt64 = UInt64.from(1),
    Corner: UInt64 = UInt64.from(1),
    Dribbling: UInt64 = UInt64.from(1),
    Passing: UInt64 = UInt64.from(1),
    Finishing: UInt64 = UInt64.from(1),
    Ball_control: UInt64 = UInt64.from(1),
    Free_kick: UInt64 = UInt64.from(1),
    Tackling: UInt64 = UInt64.from(1), 
    Speed: UInt64 = UInt64.from(1),
    Agility: UInt64 = UInt64.from(1),
    Endurance: UInt64 = UInt64.from(1),
    Strength: UInt64 = UInt64.from(1),
    Aggression: UInt64 = UInt64.from(1),
    Bravery: UInt64 = UInt64.from(1),
    Intelligence: UInt64 = UInt64.from(1),
    Leadership: UInt64 = UInt64.from(1)
    ){

        this. GoalKeeping = {
          Focus: Focus,
          Reflex: Reflex,
          Handling: Handling,
          Kicking: Kicking,
          one_on_one: one_on_one}
        
        this. Personal = {
          Name: Name,
          Age: Age,
          Position: Position,
          Side: Side
        };

        this.History = {
          Goals: Goals,
          Passes: Passes,
          Assists: Assists,
          Matches_played: Matches_played
        };

        this.CurrentCondition = {
          isInjured: isInjured,
          Yellow_Card: Yellow_Card,
          Red_Card: Red_Card,
          isTraining: isTraining,
          Motivation: Motivation,
          Fitness: Fitness,
          Stamina: Stamina
        };

        this.Technical = {
          Corner: Corner,
          Dribbling: Dribbling,
          Passing: Passing,
          Finishing: Finishing,
          Ball_control: Ball_control,
          Free_kick: Free_kick,
          Tackling: Tackling
        };

        this.Physical = {
          Speed: Speed,
          Agility: Agility,
          Endurance: Endurance,
          Strength: Strength
        };

        this.Mental = {
          Aggression: Aggression,
          Bravery: Bravery,
          Intelligence: Intelligence,
          Leadership: Leadership
        };
    }

  //goalkeeping getter - setter
  goalkeeping_getter(){
    return(this.GoalKeeping)
  }
  goalkeeping_setter(new_goalkeeping : goalkeeping) {
    this.GoalKeeping = new_goalkeeping;
  }

  //personal setter- getter
  personal_setter(new_personal: personal) {
    this.Personal = new_personal;
  }  
  personal_getter(): personal {
    return this.Personal;
  }

  //history setter- getter
  history_setter(new_history: history) {
    this.History = new_history;
  } 
  history_getter(): history {
    return this.History;
  }

  //current_condition setter- getter
  current_condition_setter(new_current_condition: current_condition) {
      this.CurrentCondition = new_current_condition;
  }
  current_condition_getter(): current_condition {
      return this.CurrentCondition;
  }

  //technical setter- getter
  technical_setter(new_technical: technical) {
        this.Technical = new_technical;
  }
  technical_getter(): technical {
    return this.Technical;
  } 
    
  //mental setter- getter
  mental_setter(new_mental: mental) {
    this.Mental = new_mental;
  }
  mental_getter(): mental {
    return this.Mental;
  } 

  //physical ter- getter
  physical_setter(new_physical: physical) {
        this.Physical = new_physical;
  }
  physical_getter(): physical {
    return this.Physical;
  }

  setCombined(newData: { mental?: mental, physical?: physical, technical?: technical, goalkeeping?:goalkeeping }) {
      if (newData.mental) {
          this.Mental = newData.mental;
      }
      if (newData.physical) {
          this.Physical = newData.physical;
      }
      if (newData.technical) {
          this.Technical = newData.technical;
      }
      if (newData.goalkeeping) {
          this.GoalKeeping = newData.goalkeeping;
      }
  }
}