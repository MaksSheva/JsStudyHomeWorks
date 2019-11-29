let users = [];
while (true){
    let newUser = prompt('Insert Name', 'John');
    if (newUser === null) {
        break;
    }
    users.push(newUser);
    console.log(users, newUser);
}

console.info(users);


    let ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.style.listStyle = 'none';

for (let i= 0; i < users.length; i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.innerText = users[i];
}

let usersList = document.querySelectorAll('ul li');
console.log(usersList);

for (let i = 0; i < usersList.length; i++){
    usersList[i].innerText = `#${i +1} ${usersList[i].innerText}`;
    usersList[i].style.color = `#${Math.round(Math.random() * 1000)}`
    console.dir(usersList[i]);
}