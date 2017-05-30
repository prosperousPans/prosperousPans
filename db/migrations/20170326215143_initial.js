
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
      table.increments('login_id').unsigned().primary();
      table.integer('user_id').unsigned().references('id').inTable('user');
      table.string('username', 20).notNullable().unique();
      table.string('password', 30).notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('user', function (table) {
      table.increments('user_id').unsigned().primary();
      table.string('full_name', 30).notNullable();
      table.string('industry', 30).nullable();
      table.string('github_url', 75).nullable();
      table.string('linkedin_url', 75).nullable();
      table.string('image', 75).nullable();
      table.text('summary').nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('experience', function (table) {
      table.increments('experience_id').unsigned().primary();
      table.string('user_id').unsigned().references('user_id').inTable('user');
      table.string('name', 15).nullable();
      table.string('role', 30).nullable();
      table.text('description').nullable();
      table.date('start_date').nullable();
      table.date('end_date').nullable();
      table.string('organization', 30).nullable();
      // may not be necessary, if end_date = null then it is current
      // table.boolean('latest').nullable();
    }),
    knex.schema.createTableIfNotExists('tag', function (table) {
      table.increments('tag_id').unsigned().primary();
      table.string('name', 25).notNullable();
    }),
    knex.schema.createTableIfNotExists('user_tag', function (table) {
      table.increments('user_tag_id').unsigned().primary();
      table.integer('user_id').unsigned().references('user_id').inTable('user');
      table.integer('tag_id').unsigned().references('tag_id').inTable('tag');
    }),
    knex.schema.createTableIfNotExists('reason', function (table) {
      table.increments('reason_id').unsigned().primary();
      table.string('name').notNullable();
    }),
    knex.schema.createTableIfNotExists('connection_reason', function (table) {
      table.increments('connection_reason_id').unsigned().primary();
      table.integer('connection_id').unsigned().references('connection_id').inTable('connection');
      table.integer('reason_id').unsigned().references('reason_id').inTable('reason');
    }),
    knex.schema.createTableIfNotExists('connection', function (table) {
      table.increments('connection_id').unsigned().primary();
      table.integer('user_a_id').unsigned().references('id').inTable('user');
      table.integer('user_b_id').unsigned().references('id').inTable('user');
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
    knex.schema.dropTable('user'),
    knex.schema.dropTable('experience'),
    knex.schema.dropTable('tag'),
    knex.schema.dropTable('info_tag'),
    knex.schema.dropTable('reason'),
    knex.schema.dropTable('connection_reason'),
    knex.schema.dropTable('connection')
  ]);
};
