/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });

server.use(middlewares);
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  next();
});

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.dateTimeCreated = Date.now().toLocaleString();
  }
  console.log(req.body);
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on 3001 port');
});
