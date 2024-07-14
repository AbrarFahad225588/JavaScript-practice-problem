var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var numbers2 = []
for(let i=0;i<numbers.length;i++)
{
      const element=numbers2.find(num=> num===numbers[i]) 
      if(element===undefined)
      {
        numbers2.push(numbers[i])
      }
}
console.log(numbers2)

//