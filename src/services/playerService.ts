import { Player, PlayerSkills } from "../classes/player";
import { PlayerRepository } from "../repositories/playerRepository";

export class PlayerService {
    private repository = new PlayerRepository();

    async insertPlayer(player: Player) {
        try {
            if(this.repository.getByID(player.getID())) {
                throw new Error("Player already inserted!");
            }
            
            this.repository.insert(player);
            console.log(player.getNickname()+" has been inserted!")
        } catch(error: any) {
            console.log(error.message)
        }
    }

    async removePlayer(player: Player){
        try {
            if(!this.repository.getByID(player.getID())) {
                throw new Error("Player doesn't exist!");
            }
            this.repository.remove(player);
            console.log(player.getNickname()+" has been removed!")
        } catch(error: any) {
            console.log(error.message)
        }
    }
}