//1.引入mongoose
let mongoose = require('mongoose');
mongoose.Promise = Promise;
//2. 连接数据
mongoose.connect('mongodb://127.0.0.1/chat');

// 3.定义Schema
let MessageSchema = new mongoose.Schema({
    username: String,
    content: String,
    createAt: {type: String, default:new Date().toLocaleString()}
    // createAt:{type:Date,default:Date.now}
});
// 4. 定义模型
exports.Message = mongoose.model('Message', MessageSchema);
