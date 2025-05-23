// import mysql from 'mysql2/promise';
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   timezone: 'Z', 
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   ssl: {
//     rejectUnauthorized: true,
//   },
// });

// export default connection;


import mysql from 'mysql2/promise';
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timezone: 'Z', // UTC time zone
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
