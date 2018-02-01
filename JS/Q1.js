//let arr=[2,3,4,5,6,5,9,56,89,0];
function getElements(arrayArg,n=1)
{
	if(n>arrayArg.length)
	{
		document.write("Parameter provided is greater than the actual array size.");
	}
	else
	{
	if(n==1)
	document.write("First Element: "+arrayArg[0]+" Last Element: "+arrayArg[arrayArg.length-1]);
	else
	{
	document.write(`First ${n} elements: `+arrayArg.splice(0,n)+` and last ${n} elements: `+arrayArg.splice(-n));
	}
	}
}