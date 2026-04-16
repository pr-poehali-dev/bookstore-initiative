CREATE TABLE t_p24146627_bookstore_initiative.books (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(500) NOT NULL,
    author      VARCHAR(255) NOT NULL,
    genre       VARCHAR(100),
    price       INTEGER NOT NULL,
    old_price   INTEGER,
    description TEXT,
    year        INTEGER,
    pages       INTEGER,
    publisher   VARCHAR(255),
    badge       VARCHAR(100),
    rating      SMALLINT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
    cover       VARCHAR(500),
    in_stock    BOOLEAN NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
