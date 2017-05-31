
exports.up = function (knex, Promise) {
  return Promise.all([
    // knex.schema.createTableIfNotExists('profiles', function (table) {
    //   table.increments('id').unsigned().primary();
    //   table.string('first', 100).nullable();
    //   table.string('last', 100).nullable();
    //   table.string('display', 100).nullable();
    //   table.string('email', 100).nullable().unique();
    //   table.string('phone', 100).nullable();
    //   table.timestamps(true, true);
    // }),
    // knex.schema.createTableIfNotExists('auths', function(table) {
    //   table.increments('id').unsigned().primary();
    //   table.string('type', 8).notNullable();
    //   table.string('oauth_id', 30).nullable();
    //   table.string('password', 100).nullable();
    //   table.string('salt', 100).nullable();
    //   table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    // }),
    knex.schema.createTableIfNotExists('login', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('users_id').unsigned().references('id').inTable('users');
      table.string('username', 20).notNullable();
      table.string('password', 30).notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').unsigned().primary();
      table.string('full_name', 30).notNullable().unique();
      table.string('industry', 30).nullable();
      table.string('github_url', 150).nullable();
      table.string('linkedin_url', 150).nullable();
      table.string('image', 150).nullable();
      table.text('summary').nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('experience', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('users_id').unsigned().references('id').inTable('users');
      table.string('name', 15).nullable();
      table.string('role', 30).nullable();
      table.text('description').nullable();
      table.integer('start_date').nullable();
      table.integer('end_date').nullable();
      table.string('organization', 30).nullable();
      // may not be necessary, if end_date = null then it is current
      // table.boolean('latest').nullable();
    }),
    knex.schema.createTableIfNotExists('tag', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name', 25).notNullable();
    }),
    knex.schema.createTableIfNotExists('users_tag', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('users_id').unsigned().references('id').inTable('users');
      table.integer('tag_id').unsigned().references('id').inTable('tag');
    }),
    knex.schema.createTableIfNotExists('reason', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();
    }),
    knex.schema.createTableIfNotExists('connection_reason', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('connection_id').unsigned().references('id').inTable('connection');
      table.integer('reason_id').unsigned().references('id').inTable('reason');
    }),
    knex.schema.createTableIfNotExists('connection', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('users_a_id').unsigned().references('id').inTable('users');
      table.integer('users_b_id').unsigned().references('id').inTable('users');
      table.string('status').notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    // knex.schema.dropTable('auths'),
    // knex.schema.dropTable('profiles'),
    knex.schema.dropTable('login'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('experience'),
    knex.schema.dropTable('tag'),
    knex.schema.dropTable('info_tag'),
    knex.schema.dropTable('reason'),
    knex.schema.dropTable('connection_reason'),
    knex.schema.dropTable('connection')
  ]);
};
