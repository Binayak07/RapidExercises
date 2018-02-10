//Single Level Inheritance
class Bike
{
  constructor(make,type,cc,color) {
    this.make=make;
    this.type=type;
    this.cc=cc;
    this.color=color;
  }

  isRacingBike() {
    if(this.type="Racing")
    return true;
    else
    return false;
  }
}

class Honda extends Bike
{
  
  constructor(name,price,make,type,cc,color) {
    super(make,type,cc,color); //cc is the power of engine
    this.name=name;
    this.price=price;
    this.stock=0;
  }

  addStock(newAdded) {
    this.stock += newAdded;
  } 
  
  getStock() {
    if(this.stock===0) {
      console.log("Stock is empty. Please add some item");
      return 0;
    }
    else
    return this.stock;
  }

  isAvailable() {
    if(this.getStock()>0)
    return true;
    else
    return false;
  }

  showDetails() {
    console.log(`${this.name} in Rs.${this.price},Its a Make of ${this.make}, and ${this.type} bike with ${this.cc} CC Engine in ${this.color} color`);
  }
}

let hondaShine = new Honda("Honda Shine",58000,"Honda","Mileage",110,"Black");
hondaShine.showDetails();
console.log(hondaShine.getStock());

/*Example demonstrating Multple Inheritance*/

let RegistrationActivity = {
  requestRegister() {
    this.registered=true;
    return "Registered";
  },

  withdrawRegistration() {
    this.registered=false;
    console.log("Deregistered");
  }
}
class Courses
  {
    constructor(coreFirst,coreSecond,elective) {
  this.coreFirst=coreFirst;
  this.coreSecond=coreSecond;
  this.elective=elective;
    }

    getCourseInfomation() {
    
      return {
        coreFirst:this.coreFirst,
        coreSecond:this.coreSecond,
        elective:this.elective,
      }
    }
  }

class Student extends Courses {
  constructor(name,id,semester,coreFirst,coreSecond,elective) {
    super(coreSecond,coreSecond,elective);
    this.name=name;
    this.id=id;
    this.semester=semester;
  }
  
  getStudentDetails() {
    
    return {
      name:this.name,
      id:this.id,
      semester:this.semester
    }
  }
}

Object.assign(Student.prototype,RegistrationActivity) //copying methods, same as Student implements RegistrationActivity

let binayak = new Student("Binayak",201612069,"First","C++","Networks","Discrete Math");
console.log(binayak.requestRegister());
console.log(binayak.getStudentDetails());
console.log(binayak.getCourseInfomation());

/*Demonstration of multilevel inheritance*/

class ReadableObjects
{
  constructor(hasPictures,isTangible,genre,authors) {
    this.hasPictures=hasPictures;
    this.isTangible=isTangible;
    this.genre=genre;
    this.authors=authors;
  }

  getGeneralProperties()
  {
    return {
      hasPictures:this.hasPictures,
      isTangible:this.isTangible,
      genre:this.genre,
      authors:this.authors,
    }
  }
}

class Books extends ReadableObjects{

    constructor (hasPictures,isTangible,genre,bookTitle,ISBN,publisher,authors,price,pages,edition,format) {
    super(hasPictures,isTangible,genre,authors);
    this.format=format;
    this.bookTitle=bookTitle
    this.ISBN=ISBN;
    this.publisher=publisher;
    this.price=price;
    this.pages=pages;
    this.edition=edition;
  }
   getBookDetails()
   {
     console.log(this.getGeneralProperties());
     return {
       format:this.format,
       bookTitle:this.bookTitle,
       ISBN:this.ISBN,
       publisher:this.publisher,
       price:this.price,
       pages:this.pages,
       edition:this.edition
     }
   }

  }


class EBooks extends Books
{
  constructor (hasPictures,isTangible,genre,bookTitle,ISBN,publisher,authors,price,pages,edition,format,isPasswordProtected) {
    super(hasPictures,isTangible,genre,authors);
    this.format=format;
    this.isPasswordProtected=isPasswordProtected;
    this.bookTitle=bookTitle
    this.ISBN=ISBN;
    this.publisher=publisher;
    this.price=price;
    this.pages=pages;
    this.edition=edition;
    this.isTangible=false;
  }

  getEBookFormat()
  {
    return {
      format:this.format,
      isPasswordProtected:this.isPasswordProtected
    }
  }
}

let ansiC = new EBooks(false,true,"Technology","ANSI C","978-3-16-148410-0","TMH","Balagurusami",35,400,"3rd","PDF",true);
console.log(ansiC.getBookDetails());

