var pg = require('pg');
var request = require('request');
var request = require('request-promise');
var expect = require('chai').expect;

  describe('Postgres Database Testing', function () {
    var dbConnection;
    var databaseUrl = 'postgres://localhost:5432/test';

    beforeEach(function(done) {
      dbConnection = new pg.Client(databaseUrl);
      dbConnection.connect();
      var tablename = "users";

      dbConnection.query('truncate ' + tablename. done);

    });

    afterEach(function () {
      dbConnection.end();
    })
