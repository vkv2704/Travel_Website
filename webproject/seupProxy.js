const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/signup.php',
    createProxyMiddleware({
      target: 'http://localhost',
      changeOrigin: true,
    })
  );
};
