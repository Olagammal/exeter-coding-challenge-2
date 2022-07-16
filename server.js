const fastify = require('fastify')({ logger: true })
const schema = require('./routeConfiguration')

//contains all the data
var students = []

fastify.post('/add', schema.addDataSchema, async (request, response) => {
    let { studentName, studentID, subject1, subject2, subject3, subject4, subject5 } = request.body
    if (studentName && studentID && subject1 && subject2 && subject3 && subject4 && subject5) {
        let flag = 0
        for (student of students) {
            if (student['studentID'] == studentID) {
                flag = 1
                break
            }
        }
        //if the student record doesn't exist already
        if (flag === 0) {
            if (studentName.length >= 3 && !(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(studentName))) {
                //if all the subject details are given
                if (!isNaN(parseFloat(subject1)) && !isNaN(parseFloat(subject2)) && !isNaN(parseFloat(subject3)) && !isNaN(parseFloat(subject4)) && !isNaN(parseFloat(subject5))) {
                    students.push(request.body)
                    response.code(200).header('Content-Type', 'application/json;charset=utf-8').send({ message: "record added successfully", students })
                } else {
                    response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please enter the subject marks properly' })
                }
            } else {
                response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: "student's name should have more than 3 characters and no special characters" })
            }
        } else {
            response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'student id already exists' })
        }

    } else {
        response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please send the details in correct format' })
    }
})

fastify.post('/update', schema.updateDataSchema, async (request, response) => {
    let { studentID, subject1, subject2, subject3, subject4, subject5 } = request.body
    let updateDetails = [-1, -1, -1, -1, -1]
    if (parseFloat(subject1)) {
        updateDetails[0] = parseFloat(subject1)
    }
    if (parseFloat(subject2)) {
        updateDetails[1] = parseFloat(subject2)
    }
    if (parseFloat(subject3)) {
        updateDetails[2] = parseFloat(subject3)
    }
    if (parseFloat(subject4)) {
        updateDetails[3] = parseFloat(subject4)
    }
    if (parseFloat(subject5)) {
        updateDetails[4] = parseFloat(subject5)
    }

    if (studentID && (parseFloat(subject1) || parseFloat(subject2) || parseFloat(subject3) || parseFloat(subject4) || parseFloat(subject5))) {
        let newStudentCopy = []
        let flag = 0
        for (student of students) {
            if (student['studentID'] == studentID) {
                flag = 1
                updateDetails.map((item, index) => {
                    if (item > -1) {
                        student['subject' + (index + 1)] = item.toString()
                    }
                })
            }
            newStudentCopy.push(student)
        }
        //if the student record doesn't exist
        if (flag === 1) {
            students = newStudentCopy
            response.code(200).header('Content-Type', 'application/json;charset=utf-8').send({ message: "record updated successfully", students })
        } else {
            response.code(404).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'record of the student is not found' })
        }
    } else {
        response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please send the details in correct format' })
    }
})

fastify.delete('/delete', schema.deleteDataSchema, async (request, response) => {
    let { studentID } = request.body
    if (studentID) {
        var elementPos = students.map(function (x) { return x.studentID }).indexOf(studentID);

        if (elementPos > -1) {
            console.log("\n\n\n\n\n", elementPos)
            students.splice(elementPos, 1)
            response.code(200).header('Content-Type', 'application/json;charset=utf-8').send({ message: "record deleted successfully", students })
        } else {
            response.code(404).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'record of the student is not found' })
        }
    } else {
        response.code(400).header('Content-Type', 'application/json;charset=utf-8').send({ error: 'please send the details in correct format' })
    }
})

fastify.get('/report', schema.getDataSchema, async (request, response) => {
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