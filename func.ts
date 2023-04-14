// convert miles to km

let convertMilesToKm = (miles:number) : number =>{

    return miles * 1.6 ;

}
console.log(convertMilesToKm (1))

// odd number or even number

function isTheValueOddOrEven(num1: number): string {

    if (num1 % 2 === 0) {

      return "it is an even number";

    } else {

        return "it is an odd number";
    }
  }
 console.log(isTheValueOddOrEven(7))


// fizz buzz

function fizzBuzz(num1:number){

    if (num1 % 3 === 0 && num1 % 5 === 0){

        return "fizz-buzz";
          }

  else if(num1 % 3 === 0) {

     return "fizz";
  }

 else if (num1 % 5 === 0){

    return "buzz";

    }
    
    else {
        return "it is just a normal number";
    }
}

console.log(fizzBuzz(30))
