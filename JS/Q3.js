function maximumOccurence(arrayArg)
{
let occurenceCount=0;
let maxOccurence=0;
for(var iterator=0;iterator<arrayArg.length;iterator++)
  {
  	occuranceCount=0;
    for(let eachValue of arrayArg)
      {
        if(eachValue==arrayArg[iterator])
          occurenceCount++;
      }
    if(maxOccurence<occurenceCount)
    {
    	maxOccurence= occurenceCount;
    }
  }
return maxOccurance;
}