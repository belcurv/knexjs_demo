exports.up = function(knex, Promise) {
    return knex.schema

        // Create users table
        .createTable('users', function(table) {

            // creates `id` field w/primary key constratint
            table.increments();

            // create `name` field; cannot be null
            table.string('name').notNullable();

            // create `email` field; cannot be null
            table.string('email').notNullable();

            // create `created_at` field
            table.timestamp('created_at').defaultTo(knex.fn.now());

            // create `updated_at` field
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        // create todos table
        .createTable('todos', function(table) {
            table.increments();

            // create todo `title` field; cannot be null
            table.string('title').notNullable();

            // create todo `completed` field; defaults to false
            table.boolean('completed').notNullable().defaultTo(false);

            // foreign key relation to user's table
            table.integer('user_id').references('id').inTable('users');

            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('todos')
        .dropTable('users');
};
