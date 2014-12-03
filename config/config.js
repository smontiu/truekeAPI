var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'trueke'
    },
    port: 3000,
    db: 'mongodb://localhost/trueke-development'
    
  },
  localhost: {
    root: rootPath,
    app: {
      name: 'trueke'
    },
    port: 3000,
    db: 'mongodb://localhost/trueke-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'trueke'
    },
    port: 3000,
    db: 'mongodb://localhost/trueke-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'trueke'
    },
    port: 3000,
    db: 'mongodb://localhost/trueke-production'
    
  }
};

module.exports = config[env];
