interface Book{
    title: string;
    author: string;
    year: number;
    toString: () => string;
}

interface Library{
    books: Book[],
    getBooksByAuthor: (author: string) => string[];
}

let library: Library = {
    books: [
        {title: 'Harry Potter e a Pedra Filosofal', author: 'J.K Rolling', year: 1997, toString: function(){return `${this.title}, ${this.author}, ${this.year}`}},
        {title: 'Harry Potter e a Câmara Secreta', author: 'J.K Rolling', year: 1998, toString: function(){return `${this.title}, ${this.author}, ${this.year}`}},
        {title: 'Harry Potter e o Prisioneiro de Azskaban', author: 'J.K Rolling', year: 1999, toString: function(){return `${this.title}, ${this.author}, ${this.year}`}},
        {title: 'Harry Potter e o Cálice de Fogo', author: 'J.K Rolling', year: 2000, toString: function(){return `${this.title}, ${this.author}, ${this.year}`}},
        {title: 'Crônicas de Gelo e Fogo: V1', author: 'G. G. Martin', year: 2003, toString: function(){return `${this.title}, ${this.author}, ${this.year}`}}
    ],
    getBooksByAuthor: function(author: string): string[]{
        return this.books.filter(book => book.author === author).map(book => ({
            title: book.title,
            year: book.year
        }));
    }
};


console.log(library.getBooksByAuthor('J.K Rolling'));