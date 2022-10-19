import { Player } from "./player";

export class Team{
    private id: number;
    private name: string;
    private initials: string;
    private nationality: string;
    private budget: number;
    private lineup: Player[];
    private benchedLineup: Player[];
    private coach: Player;
    private fans: number;
    private marketability: number = 0;
    private chemistry: number = 50;
    private controlled: boolean = false;

    constructor(id: number, name: string, initials: string, nationality: string, budget: number, lineup: Player[], benchedLineup: Player[], coach: Player, fans: number){
        this.id = id;
        this.name = name;
        this.initials = initials;
        this.nationality = nationality;
        this.budget = budget;
        this.lineup = lineup;
        this.benchedLineup = benchedLineup;
        this.coach = coach;
        this.fans = fans;
    }
    
    // getters and setters
    public getID(): number{
        return this.id;
    }

    public setID(id: number): void{
        this.id = id;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getInitials(): string{
        return this.initials;
    }

    public setInitials(initials: string): void{
        this.initials = initials;
    }

    public getNationality(): string{
        return this.nationality;
    }

    public setNationality(nationality: string): void{
        this.nationality = nationality;
    }

    public getBudget(): number{
        return this.budget;
    }

    public setBudget(budget: number): void{
        this.budget = budget;
    }

    public getLineup(): Array<Player>{
        return this.lineup;
    }

    public insertPlayer(player: Player): void{
        this.lineup.push(player)
    }

    public removePlayer(player: Player): void{
        const index = this.lineup.indexOf(player);
        this.lineup.splice(index, 1);
    }

    public getBenchedLineup(): Array<Player>{
        return this.lineup;
    }

    public benchPlayer(player: Player): void{
        this.benchedLineup.push(player)
    }

    public removeBenchedPlayer(player: Player): void{
        const index = this.benchedLineup.indexOf(player);
        this.benchedLineup.splice(index, 1);
    }

    public getCoach(): Player{
        return this.coach;
    }

    public setCoach(coach: Player): void{
        this.coach = coach;
    }

    public getFans(): number{
        return this.fans;
    }

    public setFans(fans: number): void{
        this.fans = fans;
    }

    public getMarketability(): number{
        return this.marketability;
    }

    public setMarketability(marketability: number): void{
        this.marketability = marketability;
    }

    public getChemistry(): number{
        return this.chemistry;
    }

    public setChemistry(chemistry: number): void{
        this.chemistry = chemistry;
    }

    public isControlled(): boolean{
        return this.controlled;
    }

    public setControlled(controlled: boolean): void{
        this.controlled = controlled;
    }
}
