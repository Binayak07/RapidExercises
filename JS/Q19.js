var objArr=[
{name:"a" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
{name:"b" ,age:20 },
]


function objDeletion(objArr,index)
{
 let length=objArr.length;
 if(length<index)
 	return 0;
 else
 {
 	objArr.splice(index,1);
 	return objArr.length;
 }
}

console.log(objDeletion(objArr,3));

function objInsertion(objArr,index,newObj) 
 {
 	if(index>objArr.length)
 		return 0;
 	else
 	{
 		objArr.splice(index,0,newObj);
 		return objArr.length;
 	}
 }
