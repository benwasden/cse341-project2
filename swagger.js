const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Missions Api',
        description: 'Ben Wasden Week 3/4 NASA Spaceflight Missions API'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);