let date1=new Date("2019-12-05");
let date2=new Date("2018-02-05");
function getDateDifferenceUptoMinutes(date1,date2)
{
let diffOfDays=Math.abs(date1-date2)/(3600*1000*24);
let diffOfMonths=Math.floor(diffOfDays/31);
let diffOfYears=Math.floor(diffOfMonths/12);
let diffOfWeeks=Math.floor(diffOfDays/7);
let diffOfHours=Math.floor(diffOfWeeks*24);
let diffOfMinutes=Math.floor(diffOfHours*59);
console.log(diffOfWeeks+" Weeks, "+diffOfHours+" hours and minutes- "+diffOfMinutes);
return "difference is "+diffOfDays+" Days "+diffOfMonths+" Months "+diffOfYears+" Years "+diffOfWeeks+" Weeks "+diffOfHours+" Hours "+diffOfMinutes;
}
