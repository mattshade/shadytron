const Hapi = require('hapi');
const { graphqlHapi } = require('graphql-server-hapi');
const { hapiLegacy: voyagerMiddleware } = require('graphql-voyager/middleware');
const schema = require('../schema');

const server = new Hapi.Server();

server.connection({
  port: 3001
});

server.register([
  {
    register: graphqlHapi,
    options: {
      path: 'http://localhost:4000/graphql',
      graphqlOptions: {
        schema,
      },
      route: {
        cors: true
      }
    }
  },
  {
    register: voyagerMiddleware,
    options: {
      path: '/voyager',
      route: {
        cors: true
      },
      endpointUrl: 'http://localhost:4000/graphql',
      displayOptions: {
        sortByAlphabet: true,
      },
    },
  }
],() => {
  server.start(() => {
    console.log(`Started on ${server.info.uri}/voyager`);
  })
});
