const mysql = require('mysql');
const { mysqlConfig } = require('./../config/db');

// 创建连接对象
const connectInstance = mysql.createConnection(mysqlConfig);

// 开始连接
connectInstance.connect();

// 统一执行 SQL 的函数
const executeSQL = (sql) => {
  const promise = new Promise((resolve, reject) => {
    connectInstance.query(sql, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

  return promise;
};

module.exports = {
  executeSQL
};
