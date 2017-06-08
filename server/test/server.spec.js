'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');

describe('fetches data: ', function () {
  it('does not fetch from unknown endpoints', function (done) {
    request(app)
      .get('/arglebargle')
      .expect(404)
      .end(done);
  })

  it('fetches all data in experience table', function (done) {
    request(app)
      .get('/experience')
      .expect(200)
      .expect(function(res) {
        expect(res.body[0]).to.exist;
        expect(res.body[3]).to.exist;
        expect(res.body[6]).to.exist;
      })
      .end(done);
  })

  it('fetches data in users table', function (done) {
    request(app)
    .get('/users')
    .expect(200)
    .expect(function(res) {
      expect(res.body[0])
      expect(typeof res.body).to.equal('object')
    })
    .end(done);
  })

  it('creates a graphDB for an individual user\'s connections', function (done) {
    request(app)
    .get('/create-graphDB')
    .expect(200)
    .expect(function(res) {
      expect(res.body[0])
      expect(typeof res.body).to.equal('object')
    })
    .end(done);
  })

  it('creates a graphDB for an individual user\'s connections', function (done) {
    request(app)
    .get('/populate-full-graphDB')
    .expect(200)
    .expect(function(res) {
      expect(res.body[0])
      expect(typeof res.body).to.equal('object')
    })
    .end(done);
  })
})
