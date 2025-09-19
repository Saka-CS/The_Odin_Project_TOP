
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

function addBookToReadingLibrary(title, author, numPages, states) {
    readingLibrary.push(new Book(title, author, numPages, states));
    bookInformation = readingLibrary[readingLibrary.length - 1];
    console.log(readingLibrary);

    newBook = document.createElement('div');
    newBook.classList.add('book');

    titleDiv = document.createElement('div');
    titleDiv.classList.add('one-line');

    titleDiv.innerHTML = `  <h3>${bookInformation.title}</h3>
                            <h4><pre>    -${bookInformation.author}</h4>`;
    newBook.appendChild(titleDiv);

    newBook.innerHTML += `  <h4>${bookInformation.numPages} Pages</h4>
                            <h4>${bookInformation.states}</h4>
                            <h4>Mark As</h4>
                            <button class='testing'>Reading</button>
                            <button>Queued</button>
                            <button>Completed</button>
                            `;

    // bookTitle = document.createElement('h3');
    // bookTitle.textContent = bookInformation.title;
    // titleDiv.appendChild(bookTitle);

    // bookAuthor = document.createElement('h4');
    // bookAuthor.innerHTML = `<pre>  -${bookInformation.author}`;
    // titleDiv.appendChild(bookAuthor);
    // newBook.appendChild(titleDiv);


    // bookPages = document.createElement('h4');
    // bookPages.textContent = bookInformation.numPages + ' Pages';
    // newBook.appendChild(bookPages);

    // bookStatus = document.createElement('h4');
    // bookStatus.textContent = bookInformation.states;
    // newBook.appendChild(bookStatus);



    readingBooks.appendChild(newBook);
    console.log(newBook);

}

addBookToReadingLibrary('The Art of the Craft', '', 234, 'Reading');
addBookToReadingLibrary('How to Build A Second Brain', 'Hassan', 234, 'Reading');
addBookToReadingLibrary('The Art of the Craft', '', 234, 'Reading');