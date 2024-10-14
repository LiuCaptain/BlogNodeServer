const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
    } else if (req.headers['content-type'] !== 'application/json') {
      resolve({});
    } else {
      let postData = '';
      req.on('data', (chunk) => {
        postData += chunk.toString();
      });
      req.on('end', () => {
        if (!postData) {
          resolve({});
        } else {
          resolve(JSON.parse(postData));
        }
      });
    }
  });

  return promise;
};

const serverHandle = (req, res) => {
  const url = req.url;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1]);

  res.setHeader('Content-type', 'application/json');

  getPostData(req).then((postData) => {
    req.body = postData;

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    // 未命中路由，返回 404
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  });
};

module.exports = serverHandle;
