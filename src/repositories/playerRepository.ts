import { Player } from "../classes/player";

const fs = require("fs");

export class PlayerRepository{
    private connection = require('../db/players.json');
    
    public update(): void{
        fs.writeFile('src/db/players.json', JSON.stringify(this.connection, null, '\t'), (Error: any) => {
            if (Error) throw Error; 
            console.log("File saved!"); 
        });
    }

    public insert(player: Player): void{
        this.connection.push(player);
        this.update();
    }

    public remove(player: Player): void{
        const index = this.connection.indexOf(player);
        this.connection.splice(index, 1);
        this.update();
    }

    public getByID(id: number){
        for(const player of this.connection){
            if(player.id == id)
                return player
        }
    }
}