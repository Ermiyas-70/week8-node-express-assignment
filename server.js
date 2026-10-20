import express from 'express';
const app = express();
const PORT = 3000;


const books = [
    { id: 101, title: "JavaScript Guide", author: "Alice", genre: "Programming" },
    { id: 102, title: "Express Essentials", author: "Bob", genre: "Backend" },
    { id: 103, title: "Database Design", author: "Charlie", genre: "Database" },
    { id: 104, title: "Async JavaScript", author: "Alice", genre: "Programming" },
    { id: 105, title: "Node.js Advanced", author: "Ethan", genre: "Backend" },
    { id: 106, title: "Fullstack Architecture", author: "Fiona", genre: "Architecture" }
];


app.get('/', (req, res) => {
    res.send('Welcome to the Books API');
});


app.get('/books', (req, res) => {
    const { author, genre } = req.query;
    let filteredBooks = books;

    if (author) {
        filteredBooks = filteredBooks.filter(b => b.author.toLowerCase() === author.toLowerCase());
    }
    if (genre) {
        filteredBooks = filteredBooks.filter(b => b.genre.toLowerCase() === genre.toLowerCase());
    }

    res.json(filteredBooks);
});


app.get('/books/count', (req, res) => {
    res.json({ count: books.length });
});


app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});