const fastify = require('fastify')({ logger: true })

fastify.get('/', async (req, reply) => {
  return { hello: 'world' };
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
