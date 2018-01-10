Postgres stuff:

1. might need to change password for database user:

    `ALTER USER <username> PASSWORD 'newPassword';`

Knex CLI migration tool requires that knex be installed globally:

`npm install -g knex`

**Order of Operations**

1. create migration
2. create seed
3. do migration
4. do seed

**Create a migration**

`knex migrate:make <name_of_migration>`

**Create Seed Files**

Order is important. In this demo, since todos depends on a field in the users table, we can't create todos before users. We will order the seeders accordingly:

`knex seed:make 01_users`
`knex seed:make 01_todos`

**Do Migrations**

`knex migrate:latest`

_Roll back migrations_

`knex migrate:rollback`
