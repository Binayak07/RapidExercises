//Demonstration of Super
class Mammal
{
  constructor(name)
  {
    this.name=name;
  }

  showMammal(){
      console.log(this.name+" is a mammal")
    }
}

class Person extends Mammal
{
  constructor(name)
  {
  super(name); 
  }

  showPerson(){
    console.log(this.name+" is a person");
  }
}

class User extends Person{
  constructor(name,userId)
  {
    super(name);
    this.userId=userId;
  }

  showUserID()
  {
    console.log(this.name+" has User ID: "+this.userId);
  }
}

let binayak = new User("Binayak","Binayak.Rapidops");
binayak.showUserID();
binayak.showPerson();
binayak.showMammal();
