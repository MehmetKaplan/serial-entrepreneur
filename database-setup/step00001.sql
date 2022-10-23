\connect serialentdb;

--    ____                           _   _                  _                   
--   / ___| ___ _ __   ___ _ __ __ _| |_(_)_ __   __ _     / \   _ __ ___  __ _ 
--  | |  _ / _ \ '_ \ / _ \ '__/ _` | __| | '_ \ / _` |   / _ \ | '__/ _ \/ _` |
--  | |_| |  __/ | | |  __/ | | (_| | |_| | | | | (_| |  / ___ \| | |  __/ (_| |
--   \____|\___|_| |_|\___|_|  \__,_|\__|_|_| |_|\__, | /_/   \_\_|  \___|\__,_|
--                                               |___/                          
create user serialentrepreneurapp encrypted password 'serialentrepreneurapp.';

grant connect on database "serialentdb" to serialentrepreneurapp;

create schema serialentrepreneur authorization serialentrepreneurapp;

create table serialentrepreneur.user_registrations (
	id integer generated by default as identity primary key,
	comfirmation_code varchar(20),
	name varchar(100),
	email varchar(200),
	password varchar(200),
	created_at timestamp default now()
);

grant all on serialentrepreneur.user_registrations to serialentrepreneurapp;

create index user_registrations_idx1 on serialentrepreneur.user_registrations (comfirmation_code);

create table serialentrepreneur.users (
	id integer generated by default as identity primary key,
	name varchar(100),
	email varchar(200),
	password varchar(200),
	generated_at timestamp default current_timestamp
);

grant all on serialentrepreneur.users to serialentrepreneurapp;

create index users_idx1 on serialentrepreneur.users (email);

create table serialentrepreneur.subscriptions (
	id integer generated by default as identity primary key,
	customer_id integer,
	state char(1),
	valid_from timestamp,
	valid_to timestamp
);

grant all on serialentrepreneur.subscriptions to serialentrepreneurapp;

alter table
	serialentrepreneur.subscriptions
add
	constraint fk_subscriptions_serialentrepreneur foreign key (customer_id) references serialentrepreneur.users(id);

alter table
	serialentrepreneur.subscriptions
add
	constraint cons_subscriptions check (state in ('a', 'd'));

create table serialentrepreneur.subscription_payments (
	id integer generated by default as identity primary key,
	subscription_id integer,
	state char(1),
	executed_at timestamp,
	amount decimal(10, 3)
);

grant all on serialentrepreneur.subscription_payments to serialentrepreneurapp;

alter table
	serialentrepreneur.subscription_payments
add
	constraint fk_subscription_payments_subscriptions foreign key (subscription_id) references serialentrepreneur.subscriptions(id);

-- (c)ompleted, (p)ending
alter table
	serialentrepreneur.subscription_payments
add
	constraint cons_subscription_payments check (state in ('c', 'p'));