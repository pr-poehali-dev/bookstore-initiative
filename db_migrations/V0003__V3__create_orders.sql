CREATE TABLE t_p24146627_bookstore_initiative.orders (
    id               SERIAL PRIMARY KEY,
    customer_id      INTEGER,
    customer_name    VARCHAR(255) NOT NULL,
    customer_email   VARCHAR(255) NOT NULL,
    customer_phone   VARCHAR(50),
    delivery_address TEXT,
    total_amount     INTEGER NOT NULL,
    status           VARCHAR(50) NOT NULL DEFAULT 'new',
    comment          TEXT,
    created_at       TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMP NOT NULL DEFAULT NOW()
);
