module.exports = {
  apps : [{
    name      : 'backend-test',
    script    : 'index.js',
    instances : 'max',
    autorestart : true,
    watch       : false,
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production : {
      NODE_ENV: 'production',
      PORT: 80
    }
  }]
};
