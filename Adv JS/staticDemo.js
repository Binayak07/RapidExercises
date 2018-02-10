/*Demonstration of Static Methods*/

class CollegeStudent
{
  constructor(argument) {
  this.name=argument.name;
  this.program=argument.program;
  this.session=argument.session;
  this.bloodGroup=argument.bloodGroup;
  }

  showStudentDetails()
  {
      console.log(`
                    Name: ${this.name}, ID: ${this.id}, Program: ${this.program},
                    Session: ${this.session}, Blood Group: ${this.bloodGroup},
                    College: ${CollegeStudent.collegeName()}
                `)
  }

  static collegeName() {
    return "DAIICT";
  }
}

let argument={
  name:"Binayak",
  id:201612069,
  program:"M.Sc IT",
  session:"2016-18",
  bloodGroup:"O+"
}
let Student1 = new CollegeStudent(argument);
Student1.showStudentDetails();