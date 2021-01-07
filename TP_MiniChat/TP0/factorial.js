function factorial(n) {
   
    if(n <= 0) {
    	return 1;
    }
    return n * factorial(n - 1);
}

function main(){
    let n = 6;
    let f = factorial(6);
    console.log("factorial(" + n + ") = " + f);
}

main();
