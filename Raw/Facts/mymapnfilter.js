let arr = [4,14,17,23,48,66];
 
function modify(n){
    if(n%2==0) return n+1;
    else return n-1;
}

function isprime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}

Array.prototype.mymap = function (modify){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(modify(this[i]));
    }
    return newArr;
};

Array.prototype.myfilter = function (isprime){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        if(isprime(this[i])){
         newArr.push(this[i]);
        }
    }
    return newArr;
}

let transformedarr = arr.mymap(modify);
let primearr = transformedarr.myfilter(isprime);
console.log(primearr);