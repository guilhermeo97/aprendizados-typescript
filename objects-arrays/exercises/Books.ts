interface Book {
    titulo: string,
    autor: string,
    ano: number
} 

const livros: Book[] = [
    { titulo: 'Livro 1', autor: 'Autor 1', ano: 2010 },
    { titulo: 'Livro 2', autor: 'Autor 2', ano: 2015 },
    { titulo: 'Livro 3', autor: 'Autor 3', ano: 2020 },
    { titulo: 'Livro 4', autor: 'Autor 4', ano: 2018 }
];

let filter: Book[] = livros.filter(book => book.ano > 2015);
console.log(filter);