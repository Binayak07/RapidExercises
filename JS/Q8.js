function getDateDifference(date1,date2)
{
let diffOfDays=Math.abs(date1-date2)/(3600*1000*24);
let diffOfMonths=Math.floor(diffOfDays/31);
let diffOfYears=Math.floor(diffOfMonths/12);
return "difference is "+diffOfDays+" Days "+diffOfMonths+" Months and "+diffOfYears+" Years";
}