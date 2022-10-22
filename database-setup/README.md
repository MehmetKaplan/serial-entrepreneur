## SETUP - DATABASE

Following steps should lead you to prepare a proper DB setup for the `serial-entrepreneur`. This DB is to be used for 

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

#### Generate Admin User

```bash
sudo -u postgres createuser SerialEntDB_Admin --no-createdb --createrole --no-superuser
sudo -u postgres createdb SerialEntDB
```

### Connection configuration

#### Open the `pg_hba.conf` file for editing (modify `[VERSION]`)
```bash
sudo vi /etc/postgresql/[VERSION]/main/pg_hba.conf
```
#### Add following under the comment `# "local" is for Unix domain socket connections only`
```
local   SerialEntDB     all                                     scram-sha-256
```

#### Open the `postgresql.conf` file for editing (modify `[VERSION]`)
```bash
sudo vi /etc/postgresql/[VERSION]/main/postgresql.conf
```
#### Uncomment the line `#password_encryption = scram-sha-256     # scram-sha-256 or md5`
The new line should be like this:
```
password_encryption = scram-sha-256     # scram-sha-256 or md5
```

### Generate DB Objects

Serial Entrepreneur operates on a DB named `SerialEntDB`. This was generated in the previous step. The schema under this DB is named `SerialEntrepreneur`. To generate the schema and the objects within it run following files to generate your DB structure.

#### (OPTIONAL-CLEAN SCHEMA) Remove the objects in the shema and the schema itself

Connect to your database like **DANGEROUS, DO THIS STEP IF NEEDED, CONSCIOUSLY**
```bash
sudo -u postgres psql
```
and copy-paste [this file content](./step00000.sql).

#### Generate the objects

Connect to your database like
```bash
sudo -u postgres psql
```
and copy-paste [this file content](./step00001.sql).

