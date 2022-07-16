const fastify = require('fastify')({ logger: true })

//contains all the data
var students = []

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const startServer = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 8000 })
        console.log('server is running')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

startServer()

