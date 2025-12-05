const { getBookInformation, getBookSummaries, getBooksByAuthor, getTotalPages } = require("./library-manager");

describe("library-manager", () => {
    test("Should return a string listing with every 'title by author' in a new line from the catalog", () => {
        const catalog = [
            {
                title: 'Rich Dad Poor Dad',
                author: 'Robert Kiyosaki and Sharon Lechter',
                about: 'A book about financial literacy, financial independence, and building wealth. ',
                pages: 336,
            },

            {
                title: 'Zero to Sold',
                author: 'Arvid Kahl',
                about: 'A book on how to bootstrap a business',
                pages: 500,
            }
        ];

        const result = getBookInformation(catalog);

        expect(result).toBe(
           "Rich Dad Poor Dad by Robert Kiyosaki and Sharon Lechter\n" +
  "Zero to Sold by Arvid Kahl"
        );
    });

    test("Should return a string  of the summaries of every book", () => {
        const catalog = [
            {
                title: 'Rich Dad Poor Dad',
                author: 'Robert Kiyosaki and Sharon Lechter',
                about: 'A book about financial literacy, financial independence, and building wealth. ',
                pages: 336,
            },

            {
                title: 'Zero to Sold',
                author: 'Arvid Kahl',
                about: 'A book on how to bootstrap a business',
                pages: 500,
            }
        ];

        const result = getBookSummaries(catalog);

        expect(result).toEqual(
            'A book about financial literacy, financial independence, and building wealth. \n' +
            'A book on how to bootstrap a business'
        );
    });

    test("should return the title 'Rich Dad Poor Dad' when the author are 'Robert Kiyosaki and Sharon Lechter' and they exists on the catalog", () => {
        const catalog = [
            {
                title: 'Rich Dad Poor Dad',
                author: 'Robert Kiyosaki and Sharon Lechter',
                about: 'A book about financial literacy, financial independence, and building wealth. ',
                pages: 336,
            },

            {
                title: 'Zero to Sold',
                author: 'Arvid Kahl',
                about: 'A book on how to bootstrap a business',
                pages: 500,
            }
        ];
        const author = 'Robert Kiyosaki and Sharon Lechter'

        const result = getBooksByAuthor(catalog, author);

        expect(result).toEqual(['Rich Dad Poor Dad']);
    });

    test("should return total number of pages (836) in the books of the catalog when book1 has 336 pages and book2 has 500", () => {
        const catalog = [
            {
                title: 'Rich Dad Poor Dad',
                author: 'Robert Kiyosaki and Sharon Lechter',
                about: 'A book about financial literacy, financial independence, and building wealth. ',
                pages: 336,
            },

            {
                title: 'Zero to Sold',
                author: 'Arvid Kahl',
                about: 'A book on how to bootstrap a business',
                pages: 500,
            }
        ];

        const result = getTotalPages(catalog);

        expect(result).toBe(836);
    })
})