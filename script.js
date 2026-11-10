
function addBook() {
    let book = document.getElementById("book").value;

    if (book) {
        document.getElementById("result").innerText =
            "Book added: " + book;
    } else {
        alert("Enter a book name");
    }
}
