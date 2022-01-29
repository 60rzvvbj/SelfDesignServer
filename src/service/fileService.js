import fs from 'fs';
import path from 'path';
import projectService from './projectService.js';
import md5Util from '../utils/md5Util.js';
import netUtil from '../utils/netUtil.js';
import mimeUtil from '../utils/mimeUtil.js';

let basePath = path.resolve('runTime/');

function randomFileName() {
	return Date.now();
}

async function uploadImage(file) {
	let fileName = randomFileName() + '.' + file.originalname.split('.').pop();
	let url = '/other/getImage?fileName=' + fileName;
	let target = path.resolve(basePath, fileName);

	fs.readFile(path.resolve(file.path), function (err, data) {  // 异步读取文件内容
		fs.writeFile(target, data, function (err) { // des_file是文件名，data，文件数据，异步写入到文件
			fs.rm(path.resolve(file.path), function (err) {
			});
		});
	});

	return url;
}

async function getFile(fileName, res) {
	let target = path.resolve(basePath, fileName);
	let mimeType = mimeUtil.getMimeType(fileName.split('.').pop());
	res.setHeader('Content-Type', mimeType + ';charset=utf-8');
	netUtil.returnResources(target, res);
	return true;
}

async function releaseProject(id) {

}

async function importProject(account, name, file) {
	let content = null;
	return (await projectService.addProject(account, name, content));
}

async function exportProject(id, res) {
	let content = await projectService.getProjectContent(id);
	let fileName = Date.now() + '.json';
	res.set({
		'Content-Type': 'application/octet-stream',
		'Content-Disposition': 'attachment; filename=' + fileName,
	});
	res.send(content);
}

export default {
	uploadImage,
	getFile,
	releaseProject,
	importProject,
	exportProject,
};