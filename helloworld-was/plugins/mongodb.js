'use strict'

const fp = require('fastify-plugin')

const {
    DATABASE_USER,
    DATABASE_PASSWORD,
 } = process.env
 
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/mongodb'), {
        connectionString: 
        `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}`
      })
})