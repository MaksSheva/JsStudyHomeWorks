document.body.addEventListener('click', function (event) {
    // console.log('Body click');
    if (event.target.nodeName !== 'A') {}
    event.preventDefault();
    console.log('body click on link')
}, false);

document.querySelector('Button').addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('Button click');
});

document.querySelector('Button').addEventListener('mousedown', function (event) {
    event.stopPropagation();
    console.log('Mouse DOWN');
});

document.querySelector('Button').addEventListener('mouseup', function (event) {
    event.stopPropagation();
    console.log('Mouse UP');
});

document.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('link');
});

let link = document.createElement('a');
link.innerText  = 'hello';
link.setAttribute('href','');
document.body.appendChild(link);
