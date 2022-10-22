\connect SerialEntDB;

--   ____ _                 _                  _                   
--  / ___| | ___  __ _ _ __(_)_ __   __ _     / \   _ __ ___  __ _ 
-- | |   | |/ _ \/ _` | '__| | '_ \ / _` |   / _ \ | '__/ _ \/ _` |
-- | |___| |  __/ (_| | |  | | | | | (_| |  / ___ \| | |  __/ (_| |
--  \____|_|\___|\__,_|_|  |_|_| |_|\__, | /_/   \_\_|  \___|\__,_|
--                                  |___/                          
revoke all on SerialEntrepreneur.Subscription_Payments
from
	SerialEntrepreneurApp;

drop table SerialEntrepreneur.Subscription_Payments;

revoke all on SerialEntrepreneur.Subscriptions
from
	SerialEntrepreneurApp;

drop table SerialEntrepreneur.Subscriptions;

revoke all on SerialEntrepreneur.Users
from
	SerialEntrepreneurApp;

drop table SerialEntrepreneur.Users;

revoke all on SerialEntrepreneur.User_Registrations
from
	SerialEntrepreneurApp;

drop table SerialEntrepreneur.User_Registrations;

drop schema if exists SerialEntrepreneur;

revoke connect on database "SerialEntDB"
from
	SerialEntrepreneurApp;

drop user if exists SerialEntrepreneurApp;