import fs from 'fs';
import path from 'path';
let logFolder = path.resolve('../../log/');

function logSetColor(text) {
	fs.appendFileSync(path.join(logFolder, 'color.log'), text + '\n');
}

function logUse(obj) {
	let str = '';
	str += obj.time + '\t';
	str += '用户：' + obj.account + ' ';
	str += obj.sno + obj.sname + '\t';
	for (let i = obj.behavior.length; i < 20; i++) {
		obj.behavior += ' ';
	}
	str += obj.behavior + '\t';
	str += obj.level == 0 ? '' : obj.level == 1 ? '!注意' : '!!!警告';
	fs.appendFileSync(path.join(logFolder, 'user.log'), str + '\n');
}

function logRequest(text) {
	fs.appendFileSync(path.join(logFolder, 'request.log'), text + '\n');
}

export default {
	logSetColor,
	logUse,
	logRequest,
};