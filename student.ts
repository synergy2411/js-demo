import { Person } from './model/person';

export class Student {
    private firstName : string;
    private lastName : string;
    private age : number;
    constructor(user : Person){
       this.firstName = user.firstName;
    }
    getFullName() : string {
        return this.firstName + " " + this.lastName;
    }
}

export const MAGIC_NUMBER = Math.random() * 10;