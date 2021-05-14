function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
//console output: 2,3,undefined

function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//console output: 6,10

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}
//console output: 3,7

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//console output: 15,15,10,15

for(var i=0; i<15; i+=2) {
    console.log(i);
 }
 //console output: 0,2,4,6,8,10,12,14

for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {      
        console.log(i*j);
    }
}
//console output: 0,0,0,1,0,2

function looping(x,y) {
    for(var i=0; i<x; i++) {
        for(var j=0; j<x; j++) {        
            console.log(i*j);
        } 
    }
}
z = looping(3,3);
console.log(z);
//console output: 0,0,0,0,1,2,0,2,4, undefined 

function looping(x,y) {
    for(var i = 0 ; i<x ; i++) {
        for(var j=0; j<y; j++) {        
            console.log(i*j);
        } 
    }
    return x*y;
}
z = looping(3,5);
console.log(z);
//console output: 0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

function printUpTo(x) {
    if(x<=0){
        console.log(false);
        return false;
    }else{
        for(var i = 0 ; i <= x ; i++)
            console.log(i);
    }
    
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  var y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false

function printSum(x) {
    var sum = 0;
    for(var i = 0 ; i <= x ; i++){
        console.log(i);
        sum = sum + i;
        console.log(sum);
    }
    //your code here
    return sum
}
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // // debería imprimir 32640

function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // debería imprimir 6

//BONUS
function largestElement(x) {
        var large = 0;
        for(var i = 0 ; i < x.length ; i++){
            if(x[i] > large){
                large = x[i];
            }
        }
        return large;
}
console.log(largestElement([1,30,5,7]));