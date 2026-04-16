CREATE TABLE t_p24146627_bookstore_initiative.customers (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL UNIQUE,
    phone      VARCHAR(50),
    address    TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
