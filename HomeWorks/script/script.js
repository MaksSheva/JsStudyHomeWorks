let x  = parseInt(prompt('Enter X' , 1));
let y  = parseInt(prompt('Enter Y' , 1));
let z  = parseInt(prompt('Enter Z' , 1));

if (x<y) {
    if (x<z){
        alert(x);
    } else {
        alert(z);
    }
} else {
    if (y<z){
        alert(y);
    } else {
        alert (z);
    }
}