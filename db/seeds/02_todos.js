exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('todos').del()
        .then(function() {
            // Inserts seed entries
            return knex('todos').insert([
                { id: 1, title: 'Buy milk', user_id: 1 },
                { id: 2, title: 'Walk the dog', user_id: 2 },
                { id: 3, title: 'Go to the gym', user_id: 3 },
                { id: 4, title: 'Stop the damn leafblowers outside', user_id: 3 },
                { id: 5, title: 'Get the mail', user_id: 3 },
                { id: 6, title: 'Get some headphones', user_id: 2 }
            ]);
        });
};
