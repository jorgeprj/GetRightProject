import { Person } from "./person";
import { Team } from "./team";

export class Manager extends Person{
    private team: Team;
    private managementSatisfaction: number = 50;
    private fansSatisfaction: number = 50;

    constructor(id:number, firstName: string, lastName: string, nickname: string, age: number, nationality: string, experience: number, marketability: number, team: Team){
        super(id, firstName, lastName, nickname, age, nationality)
        this.team = team;
        this.team.setControlled(true);
    }

    public getTeam(): Team{
        return this.team;
    }

    public getManagementSatisfaction(): number{
        return this.managementSatisfaction;
    }

    public setManagementSatisfaction(satisfaction: number): void{
        this.managementSatisfaction = satisfaction;
    }

    public getFansSatisfaction(): number{
        return this.fansSatisfaction;
    }

    public setFansSatisfaction(satisfaction: number): void{
        this.fansSatisfaction = satisfaction;
    }
}