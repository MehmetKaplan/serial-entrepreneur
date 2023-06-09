create table serialentrepreneur.removed_users (
	user_id integer primary key,
	removed_at timestamp default now(),
	users_data jsonb
);

grant all on serialentrepreneur.removed_users to serialentrepreneurapp;

alter table serialentrepreneur.removed_users add constraint removed_users_fk1 foreign key (user_id) references serialentrepreneur.users (id);
