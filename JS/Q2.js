let numericString=prompt("Input any large number: ");
for(var i=0;i<numericString.length || isNaN(parseInt(numericString[i+1]))==false;i++)
{
	var currentIndex=parseInt(numericString[i]),nextIndex=parseInt(numericString[i+1]);
	document.write(currentIndex);
	if(currentIndex%2==0 && nextIndex%2==0)
	{
		document.write("-");
	}

}