const request = require('supertest');
const { expect } = require('chai');
// const express = require('express');

// Assuming your app is defined in a file called `app.js`
const app = require('../src/server');

describe('GET /', () => {
    it('should respond with Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });
});

describe('GET /headers', () => {
    it('should respond with JSON containing request headers', (done) => {
        request(app)
            .get('/headers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('accept');
                done();
            });
    });
});
