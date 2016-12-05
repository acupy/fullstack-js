const Planet = require('./models').Planet;

/***********
:: ROUTES ::
***********/

module.exports = [
  {
    method: 'GET',
    path:'/planets',
    handler(request, reply) {
      Planet.find({}, (err, result) => {
        if (err) { return reply(err); }
        else if (result) { reply(result); }
        else {reply('SORRY'); }
      });
    }
  },
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.file('app/index.html');
    }
  },
  {
    method: 'GET',
    path: '/bin/{file}',
    handler(request, reply) {
      reply.file('bin/' + request.params.file);
    }
  }
];
