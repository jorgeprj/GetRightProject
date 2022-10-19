export class Person{
    private id: number;
    private firstName: string;
    private lastName: string;
    private nickname: string;
    private age: number;
    private nationality: string;

    constructor(id: number, firstName: string, lastName: string, nickname: string, age: number, nationality: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.age = age;
        this.nationality = nationality;
    }

    public getID(): number{
        return this.id;
    }

    public setId(id: number): void{
        this.id = id;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public setFirstName(firstName: string): void{
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    public getNickname(): string {
        return this.nickname;
    }

    public setNickname(nickname: string): void{
        this.nickname = nickname;
    }

    public getAge(): number{
        return this.age;
    }

    public setAge(age: number): void{
        this.age = age;
    }

    public getNationality(): string{
        return this.nationality;
    }

    public setNationality(nationality: string): void{
        this.nationality = nationality;
    }
}
