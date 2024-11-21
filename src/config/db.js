const env = process.env.NODE_ENV;

let mysqlConfig = '';

if (env === 'dev') {
  mysqlConfig = {
    host: 'localhost',
    port: 3306,
    database: 'personblog',
    password: 'abroad@215233',
    user: 'root'
  };
}

if (env === 'production') {
  mysqlConfig = {
    host: 'localhost',
    port: 3306,
    database: 'personblog',
    password: 'abroad@215233',
    user: 'root'
  };
}

module.exports = {
  mysqlConfig
};
