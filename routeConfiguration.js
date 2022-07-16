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
                    students: {
                        type: 'array',
                        properties: {
                            studentName: { type: 'string' },
                            studentID: { type: 'string' },
                            subject1: { type: 'string' },
                            subject2: { type: 'string' },
                            subject3: { type: 'string' },
                            subject4: { type: 'string' },
                            subject5: { type: 'string' }
                        }
                    }
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
                subject1: { type: ['string', 'null'] },
                subject2: { type: ['string', 'null'] },
                subject3: { type: ['string', 'null'] },
                subject4: { type: ['string', 'null'] },
                subject5: { type: ['string', 'null'] }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    students: {
                        type: 'array',
                        properties: {
                            studentName: { type: 'string' },
                            studentID: { type: 'string' },
                            subject1: { type: 'string' },
                            subject2: { type: 'string' },
                            subject3: { type: 'string' },
                            subject4: { type: 'string' },
                            subject5: { type: 'string' }
                        }
                    }
                }
            },
            400: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            404: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
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
                    students: {
                        type: 'array',
                        properties: {
                            studentName: { type: 'string' },
                            studentID: { type: 'string' },
                            subject1: { type: 'string' },
                            subject2: { type: 'string' },
                            subject3: { type: 'string' },
                            subject4: { type: 'string' },
                            subject5: { type: 'string' }
                        }
                    }
                }
            },
            404: {
                type: 'object',
                properties: {
                    error: { type: 'string' }
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

const getDataSchema = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    students: {
                        type: 'array',
                        properties: {
                            studentName: { type: 'string' },
                            studentID: { type: 'string' },
                            subject1: { type: 'string' },
                            subject2: { type: 'string' },
                            subject3: { type: 'string' },
                            subject4: { type: 'string' },
                            subject5: { type: 'string' }
                        }
                    }
                }
            }
        }
    }
}


module.exports = { addDataSchema, updateDataSchema, deleteDataSchema, getDataSchema }