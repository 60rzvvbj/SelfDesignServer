import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import netUtil from './utils/netUtil.js';
import constUtil from './utils/constUtil.js';
import logUtil from './utils/logUtil.js';

let app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());

let staticUrl = path.resolve('webapp/');

//#region 
// // 文件后缀
// let fileSuffix = ['.js', '.css', '.html', '.jpg', '.jpeg', '.png', '.ico'];

// // 过滤器
// function filter(req, res, next) {
// 	let url = req._parsedUrl.pathname;
// 	for (let i = 0; i < fileSuffix.length; i++) {
// 		if (url.endsWith(fileSuffix[i])) {
// 			next();
// 			return;
// 		}
// 	}

// 	let method = req.method;
// 	let str = '';
// 	str += method == 'GET' ? 'GET   ' : 'POST  ';
// 	str += url + ' ';
// 	for (let i = str.length + 1; i < 40; i++) {
// 		str += '-';
// 	}
// 	str += ' ';
// 	let d = new Date();
// 	str = d.toLocaleString() + '\t' + str;
// 	str += JSON.stringify(method == 'GET' ? req.query : req.body);
// 	logUtil.logRequest(str);
// 	next();
// }

// app.use(filter);

// 过滤器
import requestFilter from './filter/requestFilter.js';
app.use(requestFilter.requestFilter);

// // 转发
// function forwardFile(source, aim) {
// 	app.get(source, function (req, res) {
// 		if (aim == null) {
// 			res.sendStatus(404);
// 			res.send();
// 		} else {
// 			netUtil.returnResources(aim, res);
// 		}
// 	});
// }

// forwardFile('/', path.join(staticUrl, 'faker.html'));
// forwardFile('/index.html', null);
// forwardFile('/login.html', null);
// forwardFile('/warning.html', null);
//#endregion

// 静态资源目录
app.use(express.static(staticUrl));

// 控制器
import userController from './controller/userController.js';
import projectController from './controller/projectController.js';
userController.run(app);
projectController.run(app);

// 端口
let port = 80;

app.listen(port);
console.log('local test  : http://localhost:80');
console.log('server test : http://159.75.249.227/:8848');
console.log();

// 记录当前进程号
let pid = process.pid;
fs.writeFileSync('log/pid.log', '' + pid);