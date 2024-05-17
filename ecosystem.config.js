// MENTION: pm2 启动程序的时候，入口点需要设置为这里，因为如果dist中启动，路径会出问题，导致依赖错误
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