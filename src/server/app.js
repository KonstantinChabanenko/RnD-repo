const fastify = require('fastify')({ logger: true })

const port = require('./config').port;



fastify.register(require('./routes/auth'), { prefix: '/' });
fastify.register(require('./routes/product'), { prefix: '/' });
fastify.register(require('./routes/product_search'), { prefix: '/' });

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
