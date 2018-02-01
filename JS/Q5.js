function unionOfArrays(arg1,arg2)
{

 let mySet=new Set(arg1.concat(arg2));
 
 return mySet;
}

function differencesOfArrays(arg1,arg2)
{
	
	let resultArray=[];
	let count=0;
	
	for(var data of arg1)
		
	{
		if(arg2.includes(data))
			continue;
		else
			resultArray.push(data);
	}
	
	for(var data of arg2)
	{
		if(arg1.includes(data))
			continue;
		else
			resultArray.push(data);
	}

	return resultArray;
}
