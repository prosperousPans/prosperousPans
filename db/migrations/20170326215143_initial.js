
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schemea.createTableIfNotExists('logins', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('username', 20).notNullable().unique();
      table.string('password', 30).notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').unsigned().primary();
      table.string('fullname', 30).notNullable();
      table.string('industry', 30).nullable();
      table.string('github_url', 75).nullable();
      table.string('linkedin_url', 75).nullable();
      table.string('image', 75).nullable();
      table.text('summary').nullable();
    }),
    knex.schema.createTableIfNotExists('experiences', function (table) {
      table.increments('id').unsigned().primary();
      table.string('type', 15).nullable();
      table.string('role', 30).nullable();
      table.text('description').nullable();
      table.date('start_date').nullable();
      table.date('end_date').nullable();
      table.string('organization', 30).nullable();
      table.boolean('latest').nullable();
    }),
    knex.schema.createTableIfNotExists('tags', function (table) {
      table.increments('id').unsigned().primary();
      table.string('type', 25).notNullable();
    }),
    knex.schema.createTableIfNotExists('infos_tags', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('tag_id').unsigned().references('id').inTable('tags');
    }),
    knex.schema.createTableIfNotExists('reasons', function (table) {
      table.increments('id').unsigned().primary();
      table.string('reason').notNullable();
    }),
    knex.schema.createTableIfNotExists('connections_reasons', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('connection_id').unsigned().references('id').inTable('connections');
      table.integer('reason_id').unsigned().referencer('id').inTable('reasons');
    }),
    knex.schema.createTableIfNotExists('connections', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('match_id').unsigned().references('id').inTable('users');
      table.boolean('type').notNullable();
      table.integer('reaon').unsigned().references('id').inTable('experiences');
    })

  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};
