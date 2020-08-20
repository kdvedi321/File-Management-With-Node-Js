let arr = [4,14,17,23,48,66]

function modify(number){
    if(number%2==0)
        return number+1;
    else
        return number-1;
}

function isprime(number){
    for(let div=2;div*div<=number;div++){
        if(number%div==0)
            return false;
    }
    return true;
}

let narray = arr.map(modify);
let farray = narray.filter(isprime);

console.log(farray);