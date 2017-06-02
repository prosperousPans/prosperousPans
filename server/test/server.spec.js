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

  // *** depracated ***
  // it('fetches data in users table', function (done) {
  //   request(app)
  //     .get('/users')
  //     .expect(200)
  //     .expect(function(res) {
  //       expect(res.body[0].full_name).to.equal('Rajas Kale');
  //       expect(res.body[1].full_name).to.equal('Alan Zheng');
  //       expect(res.body[2].full_name).to.equal('Lavanya AC');
  //       expect(res.body[0].summary).to.equal('I like turtles');
  //       expect(res.body[0].full_name).to.not.equal('Argle Bargle');
  //     })
  //     .end(done);
  // })

  it('fetches all data in experience table', function (done) {
    request(app)
      .get('/experience')
      .expect(200)
      .expect(function(res) {
        expect(res.body[0].role).to.equal('PhD student');
        expect(res.body[3].role).to.equal('Finance & Operations Analyst');
        expect(res.body[6].role).to.equal('Software Engineer');
        expect(res.body[0].organization).to.not.equal('I like turtles');
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
})
