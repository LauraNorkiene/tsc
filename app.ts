 function dbd(x:number, y:number) {

    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(dbd(9, 3));
console.log(dbd(5, 3));

