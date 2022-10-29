//using binding
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

//using closures

let mul=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByThree=mul(3);
multiplyByThree(10);