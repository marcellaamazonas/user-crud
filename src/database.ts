import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE)");
});

export default db;