let myLibrary = [];

function Book (author, name, number_of_pages) {
    this.author = author;
    this.name = name;
    this.number_of_pages = number_of_pages;
}

function resetForm () {
    document.querySelector('#author').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#number_of_pages').value = '';
}

function addBookToHtml () {
    let containerBook = document.querySelector('.container__books');
    let blockBook = document.createElement('div');
    blockBook.setAttribute('class', 'block__book')

    blockBook.innerHTML = `
        <div class="display__book">
            <div class="block__book__content">
                <div class="number__book">1</div>
                <div class="name__book">Name</div>
            </div>
        </div>

        <div class="description__book">
            <div class="block__discription">
                <div class="title_description">Author:</div>
                <div class="value__description"></div>
            </div>
            <div class="block__discription">
                <div class="title_description">Name:</div>
                <div class="value__description"></div>
            </div>
            <div class="block__discription">
                <div class="title_description">Number of pages:</div>
                <div class="value__description"></div>
            </div>
            <div class="block__discription">
                <div class="title_description">Read:</div>
                <div class="value__description"></div>
            </div>
        </div>

        <button class="delete" type="submit">Delete</button>
    `;

    containerBook.appendChild(blockBook);
}

function addBooktoLibrary () {
    let submit = document.querySelector('.submit');
    submit.addEventListener('click', function (event) {
        let author = document.querySelector('#author').value;
        let nameBook = document.querySelector('#name').value;
        let numberOfPages = document.querySelector('#number_of_pages').value;
        
        const book1 = new Book(author, nameBook, numberOfPages);
        myLibrary.push(book1)

        console.log(myLibrary);
        
        resetForm();
        addBookToHtml();
        event.preventDefault();
    });
}



addBooktoLibrary();