const fastify = require('fastify')({ logger: true })
const addDataSchema = require('./routeConfiguration')

//contains all the data
var students = []

fastify.post('/add', addDataSchema, async (request, response) => {
    let { studentName, studentID, subject1, subject2, subject3, subject4, subject5 } = request.body
    if (studentName && studentID && subject1 && subject2 && subject3 && subject4 && subject5) {
        //TODO:add validation for student name
        if (studentName.length >= 3) {
            if (!isNaN(parseFloat(subject1)) && !isNaN(parseFloat(subject2)) && !isNaN(parseFloat(subject3)) && !isNaN(parseFloat(subject4)) && !isNaN(parseFloat(subject5))) {
                students.push(request.body)
                response.code(200).header('Content-Type', 'application/json;charset=utf-8').send({ students })
            } else {
                response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please enter the subject marks properly' })
            }
        } else {
            response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: "student's name should have more than 3 characters" })
        }
    } else {
        response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please send the details in correct format' })
    }
})

fastify.get('/report', addDataSchema, async (request, response) => {
    response.code(200).header('Content-Type', 'application/json;charset=utf-8').send({ students })
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

