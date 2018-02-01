function shuffle(arrayArg)
{
  	let lengthOfArg=arrayArg.length;
  
  for(let iterator=0;iterator<lengthOfArg;iterator++)
    {
		var randomVal1=Math.trunc(Math.random()*lengthOfArg);
   		var randomVal2=Math.trunc(Math.random()*lengthOfArg);
  
   if(randomVal1==randomVal2)
   		{
   			iterator=iterator-1;
   			continue;
   		}
   else
   		{
      		for(let iteratorIn=iterator;iteratorIn<lengthOfArg;iteratorIn++)
      		{
        		var temp=arrayArg[randomVal1];
       	 		arrayArg[randomVal1]=arrayArg[randomVal2];
        		arrayArg[randomVal2]=temp;
         	}
	    }
 
  	}
  return arrayArg;
}

