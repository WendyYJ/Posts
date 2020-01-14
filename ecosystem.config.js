module.exports = {
    apps : [{
      name: "posts-app",
      script: "./src/index.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }