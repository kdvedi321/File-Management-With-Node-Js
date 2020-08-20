let arr = [4,14,17,23,48,66]

function total(sum=0 , number){
    return sum+number;
}

let sum = arr.reduce(total);

console.log(sum);