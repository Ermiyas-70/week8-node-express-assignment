import fs from 'fs/promises';

async function runBookAssignment() {
    try {
       
        const singleBook = { id: 1, title: "Node.js Basics", author: "Ermiyas" };
        await fs.writeFile('book.json', JSON.stringify(singleBook, null, 2));
        console.log('--- 1. Single book saved successfully ---');

       
        const fileData = await fs.readFile('book.json', 'utf8');
        const book = JSON.parse(fileData);
        console.log(`2. Read back: ID: ${book.id} | Title: ${book.title} | Author: ${book.author}`);

       
        const booksArray = [
            { id: 101, title: "JavaScript Guide", author: "Alice", genre: "Programming" },
            { id: 102, title: "Express Essentials", author: "Bob", genre: "Backend" },
            { id: 103, title: "Database Design", author: "Charlie", genre: "Database" },
            { id: 104, title: "Async JavaScript", author: "Diana", genre: "Programming" },
            { id: 105, title: "Node.js Advanced", author: "Ethan", genre: "Backend" },
            { id: 106, title: "Fullstack Architecture", author: "Fiona", genre: "Architecture" }
        ];
        await fs.writeFile('books.json', JSON.stringify(booksArray, null, 2));
        console.log('\n--- 3. Array of 6 books saved successfully ---');

       
        const arrayData = await fs.readFile('books.json', 'utf8');
        const books = JSON.parse(arrayData);

        console.log(`\n4. Total number of books: ${books.length}`);
        console.log('Books list:');
        books.forEach((b, index) => {
            console.log(`[${index + 1}] ID: ${b.id} - "${b.title}" by ${b.author}`);
        });

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

runBookAssignment();