function addStringAt(stringArg,stringToBeAdded,position)
{
	
	let index=positionCount(stringArg,position);

	let lengthOfArg=stringArg.length;
	
	let addedStringLength=stringToBeAdded.length;
	
	let strPart1=stringArg.substr(0,index);
	
	return strPart1+" "+stringToBeAdded+" "+stringArg.substr(addedStringLength+index-1);

}

function positionCount(stringArg,position) {
	let count=0;
	
	for(let iterator=0;iterator<stringArg.length;iterator++)
	{
		if(stringArg[iterator]==" ")
		{
			console.log("count was increased "+position)
	
			count++;
	
			if(count==position)
			{
	
				return iterator;
			}
		}
	}
}