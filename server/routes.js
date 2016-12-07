const Planet = require('./models').Planet;

/***********
:: ROUTES ::
***********/

module.exports = [
  {
    method: 'GET',
    path: '/api/planets',
    handler(request, reply) {
      Planet.find({}, (err, result) => {
        if (err) { return reply(err); }
        else if (result) { return reply(result); }
        return reply('SORRY');
      });
    },
  },
  {
    method: 'GET',
    path: '/api/planet/{planetName}',
    handler(request, reply) {
      Planet.find({ name: request.params.planetName }, (err, result) => {
        if (err) { return reply(err); }
        else if (result) { return reply(result); }
        return reply('SORRY');
      });
    },
  },
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.file('./app/index.html');
    },
  },
  {
    method: 'GET',
    path: '/planet/{planetName}',
    handler(request, reply) {
      reply.file('./app/index.html');
    },
  },
  {
    method: 'GET',
    path: '/bin/{file*}',
    handler: {
      directory: {
        path: ['bin/'],
        listing: false,
        index: ['./app/index.html'],
      },
    },
  },
  {
    method: 'GET',
    path: '/img/{file*}',
    handler: {
      directory: {
        path: 'app/img/',
      },
    },
  },
  {
    method: 'GET',
    path: '/css/{file*}',
    handler: {
      directory: {
        path: 'app/css/',
      },
    },
  },
];
