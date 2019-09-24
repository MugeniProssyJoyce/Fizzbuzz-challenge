
function fizzBuzz(list1, list2) {
    // Your code here
    let myList = list1.concat(list2);
    let finalLength = myList.length;
    if(finalLength % 3 === 0 && finalLength % 5 === 0){
        return('Fizzbuzz');
    } else if(finalLength % 5 === 0){
        return('Buzz');
    } else if(finalLength % 3 === 0){
        return('Fizz');
    } else {
        return(finalLength);
    }
};


module.exports = fizzBuzz;