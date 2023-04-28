'use strict'

const fp = require('fastify-plugin')

const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD
 } = process.env
 
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/mongodb'), {
        url: 
        'mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:27017'
      })
})