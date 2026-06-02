create table city(
    city_id serial primary key,
    city_name varchar(100) not null
);

insert into city(city_name) values('Delhi'),
('Coimbatore'),
('Chennai');

create table address(
    address_id serial primary key,
    address varchar(200) not null,
    city_id int not null,
    postal_code int not null,
    phone varchar(20) not null,

    foreign key(city_id) 
    references city(city_id)
);

insert into address(address,city_id,postal_code,phone) values('Sri Eshwar College',1,641202,'555-1234'),
('Kpr',2,641671,'555-5678'),
('SRM',3,641242,'555-9012');

create table customer(
    id serial primary key,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    address_id int not null unique,
    foreign key(address_id) 
    references address(address_id)
);


insert into customer(first_name,last_name,address_id) values('Manoj','Kumar',1);


create table payment(
    payment_id serial primary key,
    customer_id int not null,
    amount decimal(10,2) not null,
    payment_mode varchar(50) not null,
    payment_date timestamp default current_timestamp,

    foreign key(customer_id) 
    references customer(id)
);

insert into payment(customer_id,amount,payment_mode) values(1,100.00,'Credit Card');

