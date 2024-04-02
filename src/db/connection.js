const mongoose = require("mongoose");
const connUrl ="mongodb://liyankun:liyankun@isit.my.to:27017/LiYanKun?authSource=LiYanKun";
CONNECTION_STRING = connUrl

const connectDb = async () => {
  try {
    console.log(CONNECTION_STRING);

    const connect = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true
    });

    console.log(
      "Database connected: ",//数据库已连接
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;

