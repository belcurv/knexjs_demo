
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                { id: 1, name: 'Some Guy',     email: 'test1@yahoo.com' },
                { id: 2, name: 'Some Girl',    email: 'test2@yahoo.com' },
                { id: 3, name: 'Someone else', email: 'test3@yahoo.com' }
            ]);
        });
};
