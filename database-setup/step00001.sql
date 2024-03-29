\connect serialentdb;

--  ____                                _     _ _            
-- |  _ \ _ __ ___ _ __ ___  __ _ _   _(_)___(_) |_ ___  ___ 
-- | |_) | '__/ _ \ '__/ _ \/ _` | | | | / __| | __/ _ \/ __|
-- |  __/| | |  __/ | |  __/ (_| | |_| | \__ \ | ||  __/\__ \
-- |_|   |_|  \___|_|  \___|\__, |\__,_|_|___/_|\__\___||___/
--                             |_|                           


create user serialentrepreneurapp encrypted password 'serialentrepreneurapp.';

grant connect on database "serialentdb" to serialentrepreneurapp;

create schema serialentrepreneur authorization serialentrepreneurapp;

create extension if not exists "uuid-ossp";

--    ____                           _   _                  _                   
--   / ___| ___ _ __   ___ _ __ __ _| |_(_)_ __   __ _     / \   _ __ ___  __ _ 
--  | |  _ / _ \ '_ \ / _ \ '__/ _` | __| | '_ \ / _` |   / _ \ | '__/ _ \/ _` |
--  | |_| |  __/ | | |  __/ | | (_| | |_| | | | | (_| |  / ___ \| | |  __/ (_| |
--   \____|\___|_| |_|\___|_|  \__,_|\__|_|_| |_|\__, | /_/   \_\_|  \___|\__,_|
--                                               |___/                          

create table serialentrepreneur.user_registrations (
	id integer generated by default as identity primary key,
	confirmation_code varchar(20),
	name varchar(100),
	middlename varchar(100),
	lastname varchar(100),
	email varchar(200),
	password varchar(200),
	created_at timestamp default now(),
	birthdate date,
	gender varchar(10)
);

grant all on serialentrepreneur.user_registrations to serialentrepreneurapp;

create index user_registrations_idx1 on serialentrepreneur.user_registrations (confirmation_code);

create table serialentrepreneur.users (
	id uuid default uuid_generate_v4() primary key,
	name varchar(100),
	middlename varchar(100),
	lastname varchar(100),
	email varchar(200),
	password varchar(200),
	birthdate date,
	gender varchar(10),
	generated_at timestamp default current_timestamp
);

grant all on serialentrepreneur.users to serialentrepreneurapp;

create index users_idx1 on serialentrepreneur.users (email);

create table serialentrepreneur.user_password_reset (
	id integer generated by default as identity primary key,
	email varchar(200),
	confirmation_code varchar(20),
	created_at timestamp default now()
);

grant all on serialentrepreneur.user_password_reset to serialentrepreneurapp;

create index user_password_reset_idx1 on serialentrepreneur.user_password_reset (confirmation_code);

create table serialentrepreneur.removed_users (
	user_id uuid primary key,
	removed_at timestamp default now(),
	users_data jsonb
);

grant all on serialentrepreneur.removed_users to serialentrepreneurapp;

alter table serialentrepreneur.removed_users add constraint removed_users_fk1 foreign key (user_id) references serialentrepreneur.users (id);
