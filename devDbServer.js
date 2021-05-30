/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });

server.use(middlewares);
server.use((req, res, next) => {
  const origins = [
    'https://3000-silver-parakeet-uvgrqdoj.ws-eu08.gitpod.io/',
    'https://www.3000-silver-parakeet-uvgrqdoj.ws-eu08.gitpod.io/',
  ];
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  // console.log(res);
  next();
});
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on 3001 port');
});
