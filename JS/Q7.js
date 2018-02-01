
function extractMonth(dateArg)
{
	if(typeof dateArg!="object")
	{
		return "incorrect date format";
	}
	else
	{
	const month=dateArg.toDateString().split(" ")[1];

	return month;
	}
}

//Note Argument SHOULD strictly be Date type only