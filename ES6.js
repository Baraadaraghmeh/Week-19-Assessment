/* Q1: Convert ES5 to ES6 [2 pt]

1) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age
*/
// 1) WRITE YOUR CODE UNDER THIS LINE
let name ="Alex" ;
let age =25 ;
let result = "My name is :"+ name + "and my age is:"+ age ;





/* 
2)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
  multi:function(a,b){
    return a * b
  }
}
 */
// 2) WRITE YOUR CODE UNDER THIS LINE
let food ="Fried chicken ";
let color = "blue";
let object ={
   food:food,
   color:color,
   multi:(a,b)=>{
    return <div>
      {a ,b}
    </div>
   }
}