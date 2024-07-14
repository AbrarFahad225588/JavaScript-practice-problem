const num=2012
if((num%4===0 && num%100!=0)|| (num%400===0))
{
    console.log(`This Year ${num} is Leap year`)
}else
{
    console.log(`This Year ${num} is not Leap year`)
}