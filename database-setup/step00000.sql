\connect serialentdb;

--   ____ _                 _                  _                   
--  / ___| | ___  __ _ _ __(_)_ __   __ _     / \   _ __ ___  __ _ 
-- | |   | |/ _ \/ _` | '__| | '_ \ / _` |   / _ \ | '__/ _ \/ _` |
-- | |___| |  __/ (_| | |  | | | | | (_| |  / ___ \| | |  __/ (_| |
--  \____|_|\___|\__,_|_|  |_|_| |_|\__, | /_/   \_\_|  \___|\__,_|
--                                  |___/                          
revoke all on serialentrepreneur.subscription_payments
from
	serialentrepreneurapp;

drop table serialentrepreneur.subscription_payments;

revoke all on serialentrepreneur.subscriptions
from
	serialentrepreneurapp;

drop table serialentrepreneur.subscriptions;

revoke all on serialentrepreneur.user_password_reset
from
	serialentrepreneurapp;

drop table serialentrepreneur.user_password_reset;

revoke all on serialentrepreneur.users
from
	serialentrepreneurapp;

drop table serialentrepreneur.users;

revoke all on serialentrepreneur.user_registrations
from
	serialentrepreneurapp;

drop table serialentrepreneur.user_registrations;

drop schema if exists serialentrepreneur;

revoke connect on database "serialentdb"
from
	serialentrepreneurapp;

drop user if exists serialentrepreneurapp;