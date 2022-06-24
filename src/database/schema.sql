CREATE TABLE product (
    product_id serial PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    description VARCHAR(500),
    recommendations JSON,
    height INTEGER,
    width INTEGER,
    size  DECIMAL(10,1),
    bestseller BOOLEAN,
    featured BOOLEAN,
    currency VARCHAR(6) DEFAULT 'USD',
    image TEXT
);

create view categories as
select category from product group by category;