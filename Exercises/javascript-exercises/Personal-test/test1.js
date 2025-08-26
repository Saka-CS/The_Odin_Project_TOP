function Book(title) {
    if(!new.target) {
        throw Error("You must use the 'new'operator to call the constructor")
    }

    this.title = title;
    this.author = "J.R.R. Tolkine";
    this.pages = 295;
    this.read = "not read yet";

    this.info = function() {
        console.log("hello world");
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
    };
}

book1 = new Book("The Hobbit");

console.log(book1.info());