
//sample objects
var arrOfObj=[
{
	id: 1,
	name:"Binayak",
	age:26,
	hobby:['reading','sleeping','singing']
},

{
	id:2,
	name:"Diksha",
	age:23,
	hobby:['reading','playing','dancing']
},

{
	id:3,
	name:"Shreya",
	age:14,
	hobby:['reading','playing','dancing']
},

{
	id:4,
	name:"Shipra",
	age:28,
	hobby:['reading','drawing','music']
},

{
	id:5,
	name:"Shimit",
	age:12,
	hobby:['reading','playing','gaming']
}]



//we are getting unique hobbies from the code below
let setOfHobbies=new Set();

for(var data of arrOfObj)
{
	for(let iterator=0;iterator<data.hobby.length;iterator++)
	setOfHobbies.add(data.hobby[iterator]);
}

// we are now sorting them to an array and getting the names of the people who are having that hobby
for(let setVal of setOfHobbies)
{
	let resultArr=[];
 	for(var data of arrOfObj)
 	{
 		if(data.hobby.includes(setVal))
 			resultArr.push(data.name);
 	}
 	console.log("People with "+setVal+" as a Hobby: ");
 	
 	for(let resData of resultArr)
 		console.log(resData)
 	
 	console.log("____________________________")
 	resultArr.length=0;
}
