const fastify = require('fastify')({ logger: true,
maxParamLength: 1000
})

const port = require('./config').port;

fastify.register(require('fastify-cors'), { 
  origin: ["http://localhost:3000", "http://192.168.0.165:3000"],
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
})

fastify.register(require('./routes/auth'), { prefix: '/' });
fastify.register(require('./routes/product'), { prefix: '/' });
fastify.register(require('./routes/product_search'), { prefix: '/' });
fastify.register(require('./routes/product_tile'), { prefix: '/' });
fastify.register(require('./routes/categories'), { prefix: '/' });
fastify.register(require('./routes/search'), { prefix: '/' });
fastify.register(require('./routes/baskets'), { prefix: '/' });

const start = async () => {
  try {
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
