let myLibrary = [];


function Book (author, name, number_of_pages) {
    this.readStatus = 'false';
    this.author = author;
    this.name = name;
    this.number_of_pages = number_of_pages;
}


function resertForm () {
    document.querySelector('#author').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#number_of_pages').value = '';
}


function cleanDisplayBook (allBlockBooks) {
    allBlockBooks.forEach(book => {
        book.remove();
    });
}


function addBookToHtml () {
    let containerBook = document.querySelector('.container__books');
    let allBlockBooks = document.querySelectorAll('.block__book');

    cleanDisplayBook(allBlockBooks);
    
    myLibrary.forEach(elem => {
        let numberBook = myLibrary.indexOf(elem) + 1;
        let blockBook = document.createElement('div');
        blockBook.setAttribute('class', 'block__book');
        blockBook.setAttribute('id', numberBook);

        blockBook.innerHTML = `
            <div class="display__book">
                <div class="block__book__content">
                    <div class="number__book">${numberBook}</div>
                    <div class="name__book">${elem.name}</div>
                </div>
            </div>

            <div class="description__book">
                <div class="block__discription">
                    <div class="title_description">Author: </div>
                    <div class="value__description">${elem.author}</div>
                </div>
                <div class="block__discription">
                    <div class="title_description">Name: </div>
                    <div class="value__description">${elem.name}</div>
                </div>
                <div class="block__discription">
                    <div class="title_description">Number of pages: </div>
                    <div class="value__description">${elem.number_of_pages}</div>
                </div>
                <div class="block__discription">
                    <div class="title_description">Read: </div>
                    <div class="value__description">${elem.readStatus}</div>
                </div>
            </div>

            <button class="read" type="submit" id="${numberBook}">Read</button>
            <button class="delete" type="submit" id="${numberBook}">Delete</button>
        `;

        containerBook.appendChild(blockBook);
    });

    removeBookFromLibrary();
    changeReadStatus();
}


function changeReadStatus () {
    let allButtonsRead = document.querySelectorAll('.read');

    allButtonsRead.forEach(btn => {
        btn.addEventListener('click', event => {
            let indexBook = event.target.parentNode.id - 1;
            if (myLibrary[indexBook].readStatus === 'true') {
                myLibrary[indexBook].readStatus = 'false';
                addBookToHtml();
                removeBookFromLibrary();
                return
            }
            myLibrary[indexBook].readStatus = 'true';
            addBookToHtml();
            removeBookFromLibrary();
        });
    });
}


function removeBookFromLibrary () {
    let deleteBook = document.querySelectorAll('.delete');

    deleteBook.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', btn => {
            let indexBook = btn.target.id - 1;

            if(indexBook > -1) {
                myLibrary.splice(indexBook, 1);
                addBookToHtml();
            }
        });
    });
}


function addBooktoLibrary () {
    let submit = document.querySelector('.submit');

    submit.addEventListener('click', event => {
        let author = document.querySelector('#author').value;
        let nameBook = document.querySelector('#name').value;
        let numberOfPages = document.querySelector('#number_of_pages').value;

        const book = new Book(author, nameBook, numberOfPages);
        myLibrary.push(book);
        
        resertForm();
        addBookToHtml();
        
        event.preventDefault();
    });
}

addBooktoLibrary();


