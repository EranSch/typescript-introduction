export class Person {

	name : string;
	age : number;

	constructor(name : string, age : number){
		this.name = name;
		this.age = age;
	}

	toString(){
		return `Hello, my name is ${this.name} I am ${this.age} years old`;
	}

}
