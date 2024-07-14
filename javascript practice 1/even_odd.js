var num= prompt("Enter a number : ")
while(typeof(num) != number){
    num = prompt("Please enter a number :");
}

if(num%2==0)
{
    console.log("This is Even Number!!")
}else
{
    console.log("This is Odd Number!!")
}