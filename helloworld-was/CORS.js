const fastify = require('fastify')()

fastify.register(require('fastify-cors'), {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE']
})
