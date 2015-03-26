//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 1000 ?
var isPrime=function(number){
    for(i=2;i<number;i++){
        if(number%i===0){
            return false;
        }
        else{
            return true;
        }
    }
};

var x=0;
var num=prompt("Enter a number smaller than 1000");

for(j=12;j<num;j++){
    if(num%j===0 && isPrime(j)){
         x=j;
    }
}
console.log(x);