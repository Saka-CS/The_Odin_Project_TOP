
const readingLibrary = [];
const queuedLibrary = [];
const completedLibrary = [];

const readingBooks = document.querySelector('#reading');
const queuedBooks = document.querySelector('#queued');
const completedBooks = document.querySelector('#completed');

const addBook = document.querySelector("#add-book");
const addBookDialog = document.querySelector("#dialog");
const addBookForm = document.querySelector("#add-book-form");

                // <div class="book">
                //     <div class="one-line">
                //         <h3>Title</h3>
                //         <h4>.    -</h4>
                //         <h4>Author</h4>
                //     </div>
                //     <h4>234 Pages</h4>
                //     <h4>Completed</h4>
                //     <h4>Mark As</h4>
                //     <button>Reading</button>
                //     <button>Queued</button>
                //     <button>Completed</button>
                // </div>


function Book(title, author, numPages, states) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.states = states;
}

addBook.addEventListener('click', function() {addBookDialog.showModal()});

addBookDialog.addEventListener('click', function(evt){
    if (evt.target === addBookDialog){
        addBookDialog.close()
    }
});

addBookForm.addEventListener('click', function(evt){
    pressed_button = evt.target.id;
    evt.preventDefault();
    console.log()
    if(pressed_button === 'add-reading'){
        addBookToLibrary(addBookForm[0].value, addBookForm[1].value, addBookForm[2].value, 'Reading')
    }
    else if (pressed_button === 'add-queued'){
        addBookToLibrary(addBookForm[0].value, addBookForm[1].value, addBookForm[2].value, 'Queued')
    }
    else if (pressed_button === 'add-completed'){
        addBookToLibrary(addBookForm[0].value, addBookForm[1].value, addBookForm[2].value, 'Completed')
    }
    // addBookToLibrary(title, author, numPages, states)
//     addBookToLibrary('The Art of the Craft', 'testing', 234, 'Reading');
// addBookToLibrary('The Art of the Craft', 'testing', 234, 'Queued');
// addBookToLibrary('The Art of the Craft', 'testing', 234, 'Completed');
});

function createBookElement (bookInformation){
    newBook = document.createElement('div');
    newBook.classList.add('book');

    titleDiv = document.createElement('div');
    titleDiv.classList.add('book-title');

    titleDiv.innerHTML = `  <h3>${bookInformation.title}</h3>
                            <h4>-${bookInformation.author}</h4>`;
    newBook.appendChild(titleDiv);

    newBook.innerHTML += `  <h4>${bookInformation.numPages} Pages</h4>
                            <h4 class='${bookInformation.states}'>${bookInformation.states}</h4>
                            <h4>Mark As</h4>
                            <button class='add-to-reading'>Reading</button>
                            <button class='add-to-queued'>Queued</button>
                            <button class='add-to-completed'>Completed</button>
                            <button class='delete'>Delete</button>
                            `;
    newBook.addEventListener('click', BookChange);
    return newBook;
}

function BookChange(evt) {
    if (evt.target.classList.contains('add-to-reading')){
        book_title = evt.currentTarget.querySelector('h3').textContent;
        target_library = evt.currentTarget.querySelectorAll('h4')[2].classList[0];
        book = removeFromLibrary(book_title, target_library);

        addBookToLibrary(book.title, book.author, book.numPages, 'Reading');
    }
    else if (evt.target.classList.contains('add-to-queued')){
        book_title = evt.currentTarget.querySelector('h3').textContent;
        target_library = evt.currentTarget.querySelectorAll('h4')[2].classList[0];
        book = removeFromLibrary(book_title, target_library)

        addBookToLibrary(book.title, book.author, book.numPages, 'Queued');
    }
    else if (evt.target.classList.contains('add-to-completed')) {
        book_title = evt.currentTarget.querySelector('h3').textContent;
        target_library = evt.currentTarget.querySelectorAll('h4')[2].classList[0];
        book = removeFromLibrary(book_title, target_library)

        addBookToLibrary(book.title, book.author, book.numPages, 'Completed');
    }
    else if (evt.target.classList.contains('delete')) {
        book_title = evt.currentTarget.querySelector('h3').textContent;
        target_library = evt.currentTarget.querySelectorAll('h4')[2].classList[0];
        removeFromLibrary(book_title, target_library)
    }

}


function addBookToLibrary(title, author, numPages, states) {
    if (states === 'Reading') {
        readingLibrary.push(new Book(title, author, numPages, states));
        updateReading();
    }
    else if (states === 'Queued') {
        queuedLibrary.push(new Book(title, author, numPages, states));
        updateQueued();
    }
    else {
        completedLibrary.push(new Book(title, author, numPages, states));
        updateCompleted();
    }
}

function updateReading() {
    readingBooks.textContent = '';
    for (book in readingLibrary) {
        newBook = createBookElement(readingLibrary[book]);
        readingBooks.appendChild(newBook);
    }
}

function updateQueued() {
    queuedBooks.textContent = '';
    for (book in queuedLibrary) {
        newBook = createBookElement(queuedLibrary[book]);
        queuedBooks.appendChild(newBook);
    }
}

function updateCompleted() {
    completedBooks.textContent = '';
    for (book in completedLibrary) {
        newBook = createBookElement(completedLibrary[book]);
        completedBooks.appendChild(newBook);
    }
}

function removeFromLibrary(title, library){

    

    if (library == 'Reading'){
        for (i in readingLibrary){
            if (readingLibrary[i].title == title){
                old_book = readingLibrary.splice(i, i + 1);
                break;
            }
        }
        updateReading()
    }
    else if (library == 'Queued'){
        for (i in queuedLibrary){
            if (queuedLibrary[i].title == title){
                old_book = queuedLibrary.splice(i, i + 1);
                break;
            }
        }
        updateQueued()
    }
    else {
        for (i in completedLibrary){
            if (completedLibrary[i].title == title){
                old_book = completedLibrary.splice(i, i + 1);
                break;
            }
        }
        updateCompleted()
    }
    return old_book[0];
}


addBookToLibrary('The Art of the Craft', 'testing', 1, 'Reading');
addBookToLibrary('How to Build A Second Brain', 'Hassan', 2, 'Reading');
addBookToLibrary('The Art of the Craft', 'testing', 3, 'Reading');
addBookToLibrary('The Art of the Craft', 'testing', 4, 'Queued');
addBookToLibrary('The Art of the Craft', 'testing', 5, 'Completed');
