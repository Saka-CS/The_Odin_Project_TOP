
const readingLibrary = [];
const queuedLibrary = [];
const completedLibrary = [];

const readingBooks = document.querySelector('#reading');
const queuedBooks = document.querySelector('#queued');
const completedBooks = document.querySelector('#completed');

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

function createBookElement (bookInformation){
    newBook = document.createElement('div');
    newBook.classList.add('book');

    titleDiv = document.createElement('div');
    titleDiv.classList.add('book-title');

    titleDiv.innerHTML = `  <h3>${bookInformation.title}</h3>
                            <h4>-${bookInformation.author}</h4>`;
    newBook.appendChild(titleDiv);

    newBook.innerHTML += `  <h4>${bookInformation.numPages} Pages</h4>
                            <h4>${bookInformation.states}</h4>
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
    console.log(evt);
    console.log(evt.target);
    console.log(evt.currentTarget);
    console.log(evt.target.classList.contains('add-to-reading'));



    if (evt.target.classList.contains('add-to-reading')){
        
    }
    else if (evt.target.classList.contains('add-to-queued')){

    }
    else if (evt.target.classList.contains('add-to-completed')) {

    }
    else if (evt.target.classList.contains('delete')) {
        evt.currentTarget.remove();
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


addBookToLibrary('The Art of the Craft', 'testing', 234, 'Reading');
addBookToLibrary('How to Build A Second Brain', 'Hassan', 234, 'Reading');
addBookToLibrary('The Art of the Craft', 'testing', 234, 'Reading');
addBookToLibrary('The Art of the Craft', 'testing', 234, 'Queued');
addBookToLibrary('The Art of the Craft', 'testing', 234, 'Completed');
