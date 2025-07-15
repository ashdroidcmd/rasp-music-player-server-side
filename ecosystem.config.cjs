module.exports = {
  apps: [
    {
      name: 'music-player-server',
      script: 'dist/index.js',
      watch: false,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
