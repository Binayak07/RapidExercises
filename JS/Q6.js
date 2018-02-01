function displayRangeOfAlphabets(initial,final,difference)
{

let tempString=initial+final;
let initArg=tempString.codePointAt(0);
let finalArg=tempString.codePointAt(1);

	if(initArg>finalArg)
		{
			console.log(tempString[0]+" never comes before "+tempString[1]+" :)");
		}
	else
		{
			for(initArg;initArg<finalArg;initArg+=difference)
			console.log(String.fromCodePoint(initArg));
		}
		
}
