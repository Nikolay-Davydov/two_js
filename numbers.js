function primeNumbers(enter){
    let numbersArray = [];
    for (let x = 2; numbersArray.length < enter; x++) {
        let flag = false;        
        for (let countNumbers = 0; countNumbers < numbersArray.length; countNumbers++) {
            if (x % numbersArray[countNumbers] === 0 && !(x / numbersArray[countNumbers] === 1)) {
                flag = true;
                break;
            }
        } 
        if (flag === false) {
            numbersArray.push(x);
        }        
    }
    return numbersArray;
}
console.time();
console.log(primeNumbers(process.argv[2]));
console.timeEnd();
