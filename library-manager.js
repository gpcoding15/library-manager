const getBookInformation = catalog => {
    return catalog.map((book) => book.title + " by " + book.author).join("\n");
};

const getBookSummaries = catalog => {
    return catalog.map((book) => book.about).join("\n");
};

const getBooksByAuthor = (catalog, author) => {
    let newCatalog = []
     catalog.filter((book) => {
        if (book.author === author) {
            newCatalog.push(book.title)
        }
    });
    return newCatalog;
};

const getTotalPages = catalog => {
    return catalog.reduce((acc, book) => acc + book.pages, 0)
}
module.exports = { getBookInformation, getBookSummaries, getBooksByAuthor, getTotalPages };