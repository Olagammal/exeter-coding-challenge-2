const addDataSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                studentName: { type: 'string' },
                studentID: { type: 'string' },
                subject1: { type: 'string' },
                subject2: { type: 'string' },
                subject3: { type: 'string' },
                subject4: { type: 'string' },
                subject5: { type: 'string' }
            }
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    students: { type: 'object' }
                }
            },
            400: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    }
}

const updateDataSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                studentID: { type: 'string' },
                subjectName: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    students: { type: 'object' }
                }
            },
            400: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    }
}

const deleteDataSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                studentID: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    students: { type: 'object' }
                }
            },
            404: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    }
}

const getDataSchema = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    students: { type: 'object' }
                }
            },
            404: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    }
}


module.exports = { addDataSchema, updateDataSchema, deleteDataSchema, getDataSchema }