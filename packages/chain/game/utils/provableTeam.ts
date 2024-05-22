import { Team } from "../models/Team";
import {ProvablePlayer, ProvableTeam} from "../../src/game";
import { Encoding,Poseidon,Field } from "o1js";
import { Player } from "../models/Player";


export function stringToField(name: string){
    let toField = Field.from(Encoding.stringToFields(name)[0].toJSON());
    return toField;
}

export function fieldToString(felt: Field){
    let toName = Encoding.stringFromFields(Field.toFields(Field.from(felt)));
    return toName;
}

export function toProvablePlayer(player:Player){
    let playerName = stringToField(player.Personal.Name);
    let field = playerName[0].value
    let ownerId = Field(1);

    return new ProvablePlayer({
        name: playerName,
        ownerId: ownerId,
    });
}


export function toProvableTeam(team:Team, ownerId: Field){
    const provableName = stringToField(team.teamName);
    let players = team.players.map((p) => {
        return toProvablePlayer(p);
    });
    
    return new ProvableTeam({
        name:provableName,
        players:players,
    })
}