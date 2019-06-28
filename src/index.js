// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const mongoose = require('mongoose');

const routes = require('./routes/index');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1/directory')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'Nile Global' }
});

routes.forEach((route, index) => {
  fastify.route(route)
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
