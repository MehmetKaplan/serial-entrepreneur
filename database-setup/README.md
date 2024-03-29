## SETUP - DATABASE

This is the database setup of the [serial-entrepreneur](https://github.com/MehmetKaplan/serial-entrepreneur). Following steps should lead you to prepare a proper DB setup.

#### (OPTIONAL-FRESH START) Uninstall postgresql if you need a fresh start

These commands remove your previous installation of the PostgreSQL. **DANGEROUS, DO THIS STEP IF NEEDED, CONSCIOUSLY**
```bash
sudo apt-get --purge remove postgresql postgresql-*
dpkg -l | grep postgres
sudo apt-get --purge remove pgdg-keyring # [OR ANYTHING FROM THE SECOND COLUMN FROM ABOVE COMMAND]
```

#### Install postgresql

```bash
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
```

#### Generate DB

```bash
sudo -u postgres createdb serialentdb
```

### Connection configuration

#### Open the `pg_hba.conf` file for editing (modify `[VERSION]`)
```bash
sudo vi /etc/postgresql/[VERSION]/main/pg_hba.conf
```
#### Add following under the comment `# "local" is for Unix domain socket connections only` **before the existing peer row, in order to take precedence**
```
local   all             serialentrepreneurapp                   scram-sha-256
```

### Generate DB Objects

Serial Entrepreneur operates on a DB named `serialentdb`. This was generated in the previous step. The schema under this DB is named `serialentrepreneur`. To generate the schema and the objects within it run following files to generate your DB structure.

#### (OPTIONAL-CLEAN SCHEMA) Remove the objects in the schema and the schema itself

Connect to your database like **DANGEROUS, DO THIS STEP IF NEEDED, CONSCIOUSLY**
```bash
sudo -u postgres psql
```
and copy-paste [this file content](https://github.com/MehmetKaplan/serial-entrepreneur/blob/master/database-setup/step00000.sql).

#### Generate the objects

Check the [the ./step00001.sql file content](https://github.com/MehmetKaplan/serial-entrepreneur/blob/master/database-setup/step00001.sql) and observe below line. You **should** modify this line and change the password and save it to a safe place. 

```sql
create user serialentrepreneurapp encrypted password 'serialentrepreneurapp.';
```

For application DB configurations replace the `'serialentrepreneurapp.'`  password with your one, when related steps arrive.

Connect to your database like
```bash
sudo -u postgres psql
```
and copy-paste the contents of the following files:
-  [step00001.sql](https://github.com/MehmetKaplan/serial-entrepreneur/blob/master/database-setup/step00001.sql)
-  [step00002_from_v1.2.5](https://github.com/MehmetKaplan/serial-entrepreneur/blob/master/database-setup/step00002_from_v1.2.5.sql)

And finally restart the PostgreSQL instance so that the connection method becomes effective.

```bash
sudo service postgresql restart
```

#### Test the connection

In order to verify if everything is OK up to this point we can use the below script. For this script username and password are coming from the previous step, the [./step00001.sql file content](https://github.com/MehmetKaplan/serial-entrepreneur/blob/master/database-setup/step00001.sql), as stated in the previous section. The `psql` command should ask you the password and you'll need to provide the password coming from previous step.

```bash
psql -U serialentrepreneurapp -d serialentdb <<EOF
	select 'YES YOU ARE CONNECTED!' as "AM I CONNECTED?";
EOF
```

If as a result you see the below output, it means everything OK up to now. 

```sql
    AM I CONNECTED?     
------------------------
 YES YOU ARE CONNECTED!
(1 row)
```

Else there may be a problem in the steps and we suggest you go back to the start of this file and follow the steps once more. And if there is still problems persisting, you may need a PostgreSQL expert to check your installation.

#### Next

Once you finish above items, please go back to [serial-entrepreneur](https://github.com/MehmetKaplan/serial-entrepreneur) and continue with the next steps. 