function hideEmailAddress(email)
{

var randomIndex=Math.ceil(Math.random()*email.split("@")[0].length)-1;
 
var splitedEmail1=email.split(email.charAt(randomIndex));

var splitedEmail2=email.split("@");

var fillDots="....@";

var finalResult=splitedEmail1[0]+fillDots+splitedEmail2[1];

return finalResult;

}