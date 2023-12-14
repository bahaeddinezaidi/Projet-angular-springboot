const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  '/api': {
    target: 'http://localhost:8082', // L'URL du serveur distant
    changeOrigin: true,
    pathRewrite: {
      '^/api': '' // Supprimez le préfixe '/api' de l'URL de la requête
    }
  }
};
