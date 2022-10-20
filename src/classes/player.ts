import { Person } from "./person";
import { Role } from "./role";

export enum PlayerStatus{
    inactive = 0,
    active = 1,
    benched = 2,
    retired = 3
}

export class PlayerSkills{
    private consistency: number;
    private clutch: number;
    private impact: number;
    private pistol: number;
    private rifle: number;
    private sniper: number;
    private experience: number;
    private marketability: number;
    private teamPlay: number;
    private tactics: number;
    private mental: number
    private trust: number;

    constructor(consistency: number, clutch: number, impact: number, pistol: number, rifle: number, sniper: number, experience: number, marketability: number, teamPlay: number, tactics: number, mental: number, trust: number){
        this.consistency = consistency;
        this.clutch = clutch;
        this.impact = impact;
        this.pistol = pistol;
        this.rifle = rifle;
        this.sniper = sniper;
        this.experience = experience;
        this.marketability = marketability;
        this.teamPlay = teamPlay;
        this.tactics = tactics;
        this.mental = mental;
        this.trust = trust;
    }

    public getConsistency(): number{
        return this.consistency;
    }

    public setConsistency(consistency: number): void{
        this.consistency = consistency;
    }

    public getClutch(): number{
        return this.clutch;
    }

    public setClutch(clutch: number): void{
        this.clutch = clutch;
    }

    public getImpact(): number{
        return this.impact;
    }

    public setImpact(impact: number): void{
        this.impact = impact;
    }

    public getPistol(): number{
        return this.pistol;
    }

    public setPistol(pistol: number): void{
        this.pistol = pistol;
    }

    public getRifle(): number{
        return this.rifle;
    }

    public setRifle(rifle: number): void{
        this.rifle = rifle;
    }

    public getSniper(): number{
        return this.sniper;
    }

    public setSniper(sniper: number): void{
        this.sniper = sniper;
    }

    public getExperience(): number{
        return this.experience;
    }

    public setExperience(experience: number): void{
        this.experience = experience;
    }

    public getMarketability(): number{
        return this.marketability;
    }

    public setMarketability(marketability: number): void{
        this.marketability = marketability;
    }

    public getTeamPlay(): number{
        return this.teamPlay;
    }

    public setTeamPlay(teamPlay: number): void{
        this.teamPlay = teamPlay;
    }

    public getTactics(): number{
        return this.tactics;
    }

    public setTactics(tactics: number): void{
        this.tactics = tactics;
    }

    public getMental(): number{
        return this.mental;
    }

    public setMental(mental: number): void{
        this.mental = mental;
    }

    public getTrust(): number{
        return this.trust;
    }

    public setTrust(trust: number): void{
        this.trust = trust;
    }
}

export class Player extends Person{
    private status: PlayerStatus = PlayerStatus.active;
    private skills: PlayerSkills;
    private role: Role;
    private overall: number = 0;
    private potential: number;

    constructor(id:number, firstName: string, lastName: string, nickname: string, age: number, nationality: string, skills: PlayerSkills, role: Role, potential: number){
        super(id, firstName, lastName, nickname, age, nationality)
        this.skills = skills;
        this.role = role;
        this.setOverall(); 
        this.potential = potential;
    }

    public getStatus(): PlayerStatus{
        return this.status;
    }

    public setStatus(status: PlayerStatus): void{
        this.status = status;
    }

    public getSkills(): PlayerSkills{
        return this.skills;
    }

    public setSkills(skills: PlayerSkills): void{
        this.skills = skills;
    }

    public getRole(): Role{
        return this.role;
    }

    public setRole(role: Role): void{
        this.role = role;
    }

    public getOverall(): number{
        return this.overall;
    }

    public setOverall(): void{
        switch(this.role) {
            case Role.igl :
                this.overall = (this.skills.getClutch()+this.skills.getConsistency()+this.skills.getImpact()+this.skills.getPistol()+this.skills.getRifle()+this.skills.getSniper()+this.skills.getExperience()*10)/8;           
            break;
            case Role.awp :
                this.overall = (this.skills.getClutch()+this.skills.getConsistency()+this.skills.getImpact()+this.skills.getPistol()+this.skills.getRifle()+this.skills.getSniper()+this.skills.getExperience()*5)/7;             
            break;
            case Role.rif :
                this.overall = (this.skills.getClutch()+this.skills.getConsistency()+this.skills.getImpact()+this.skills.getPistol()+this.skills.getRifle()+this.skills.getSniper()+this.skills.getExperience()*5)/7;                
            break;
        }
    }

    public getPotential(): number{
        return this.potential;
    }

    public setPotential(potential: number): void{
        this.potential = potential;
    }
}