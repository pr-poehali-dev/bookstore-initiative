CREATE TABLE t_p24146627_bookstore_initiative.order_items (
    id       SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    book_id  INTEGER,
    title    VARCHAR(500) NOT NULL,
    author   VARCHAR(255) NOT NULL,
    price    INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1
);
