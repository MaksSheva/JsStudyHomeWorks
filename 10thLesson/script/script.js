function sayHello() {
    var userName = prompt('Enter Name', '');

    alert(`Hello ${userName}`);
}

sayHello();

function isPalyndrom (str) {
    // str = str.toLowerCase();
    // str = str.replace(/\s/g, '');
    // let result = false;
    // for (let i = 0; i < str.length / 2; i++ ){
    //     if (str[i] === str[str.length - 1 - i]){
    //         result = true;
    //     } else {
    //         result = false;
    //         break;
    //     }
    // }
    // return result;
    str = str.toLowerCase().replace(/\s/g, '');
    return str.split('').reverse().join('') === str;
}
let result = isPalyndrom('А роза упала на лапу Узора');
alert(result);