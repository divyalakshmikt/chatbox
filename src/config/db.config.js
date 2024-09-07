let dev = {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306, // default MySQL port
    database: "chatboat",
    // acquireTimeout: 1000000,
    
  };
  let prod = {
  
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306, // default MySQL port
    database: "chatboat",
  };
  let staging = {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306, // default MySQL port
    database: "chatboat",
  };

  console.log("-------process.env.NODE_APP_STAGE------- :", process.env.NODE_APP_STAGE)
  
  let config = "";
  switch (process.env.NODE_APP_STAGE) {
    case 'production':
      config = prod;
      break;
    case 'development':
      config = dev;
      break;
    case 'staging':
      config = staging;
      break;
    default:
      config = dev;
  
  }
  
  module.exports = {
    ...config
  };