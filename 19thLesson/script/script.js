'use strict';

let request = fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
let bookList = [];
let bookListElement = document.querySelector('#books-list');
let bookInfoElement = document.querySelector('#book-info');

request
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(response => {
        console.log('response', response);

        bookList = response.items;
        console.log('bookList', bookList);

        bookList.forEach(book => {
            let bookItemElement = document.createElement('a');
            bookItemElement.href = '';
            bookItemElement.innerText = book.volumeInfo.title;
            bookItemElement.classList.add('list-group-item');
            bookItemElement.setAttribute('data-id', book.id)

            bookListElement.appendChild(bookItemElement);
        })

    }).catch(error => console.log(error));

bookListElement.addEventListener('click', function (event) {
    if (!event.target.hasAttribute('data-id')) return;

    event.preventDefault();

    let bookId = event.target.getAttribute('data-id');
    console.log('bookId', bookId);

    let book = bookList.find(book => book.id === bookId);
    console.log('book', book);

    bookInfoElement.style.display = 'block';

    let bookHeading = bookInfoElement.querySelector('.book-heading');
    bookHeading.innerText =
        `${book.volumeInfo.title} - ${book.volumeInfo.authors.join(', ')} (${book.volumeInfo.publishedDate})`;

    let bookBody = bookInfoElement.querySelector('.book-body');
    bookBody.innerText = '';
    let bodyContent = {
        image: document.createElement('img'),
        paragraph: document.createElement('p'),
        link: document.createElement('a')
    };

    for (let key in bodyContent) {
        bookBody.appendChild(bodyContent[key])
    };

    bodyContent.image.src = book.volumeInfo.imageLinks.smallThumbnail;
    bodyContent.image.classList.add('pull-left');
    bodyContent.image.style.marginRight = "10px";
    bodyContent.paragraph.innerText = book.volumeInfo.description;

    bodyContent.link.innerText = 'Read More';
    bodyContent.link.href = book.volumeInfo.previewLink;
    bodyContent.link.classList.add('pull-right');
    bodyContent.link.setAttribute('target', 'blank');
});