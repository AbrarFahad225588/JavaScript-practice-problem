var array=[1000,2000,3000,4000,5000,6000]

var num=10000;

function monthlySavings(array,num)
{
   let sum=0
   for(let i=0;i<array.length;i++)
   {
    if(array[i]>=3000)
    {
        sum+=(array[i]-array[i]*.2)
    }else{
        sum+=array[i]
    }
   }
   sum-=num;
   if(sum<0)
   {
    return 'earn more'
   }else{
    return sum
   }
}



if(typeof(array)!='object' || typeof(num)!='number')
{
    console.log('Invalid Input')
}else 
{
   console.log(monthlySavings(array,num))
}