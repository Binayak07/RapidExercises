function sortAscendingByAge(arrayOfObject)
{
	for(let iteratorOut=0;iteratorOut<arrayOfObject.length;iteratorOut++)
	{
		for(let iteratorIn=0;iteratorIn<arrayOfObject.length;iteratorIn++)
		{

			if(arrayOfObject[iteratorOut].age<arrayOfObject[iteratorIn].age)
			{
				var tempVar=arrayOfObject[iteratorIn].age;
				arrayOfObject[iteratorIn].age=arrayOfObject[iteratorOut].age;
				arrayOfObject[iteratorOut].age=tempVar;
			}
		}
	}
	return arrayOfObject;
}

function sortDescendingByName(arrayOfObject)
{

for(let iteratorOut=0;iteratorOut<arrayOfObject.length;iteratorOut++)
	{
		for(let iteratorIn=0;iteratorIn<arrayOfObject.length;iteratorIn++)
		{
			
			if(arrayOfObject[iteratorOut].name>arrayOfObject[iteratorIn].name)
			{
				var tempVar=arrayOfObject[iteratorIn].name;
				arrayOfObject[iteratorIn].name=arrayOfObject[iteratorOut].name;
				arrayOfObject[iteratorOut].name=tempVar;
			}
		}
	}
	return arrayOfObject;
}
