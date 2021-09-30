const config = {
    serverConfig: {
      port: process.env.APP_PORT || 8000,
      host: process.env.APP_HOST || 'localhost',
      endpoint:process.env.APP_ENDPOINT || '/api/v1'
    },
    DBConfig: {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      define: {
        timestamps: true,
      },
    }
 
  };
  
  module.exports = config;
  