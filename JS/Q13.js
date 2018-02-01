function chopString(arg,length)
{
	var tempString=[];
	for(let iterator=0;iterator<=arg.length-1;iterator+=length)
	{
		if(arg[iterator===" "])
				continue;
		else
		{
		let tempChars=arg.substr(iterator,length);
		tempString.push(tempChars)
		}
	}

	return tempString;

 }
