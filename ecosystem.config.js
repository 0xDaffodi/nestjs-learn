module.exports = {
    apps: [
      {
        name: 'learniverse_service',
        script: './dist/main.js',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };