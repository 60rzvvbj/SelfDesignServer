import userService from "../service/userService.js";
import projectService from "../service/projectService.js";
import checkUtil from "../utils/checkUtil.js";

async function register() {
	let res = await userService.register('adminnn', '123456');
	console.log(res);
}

async function login() {
	let res = await userService.login('admin', '1234567');
	console.log(res);
}

async function modifyPwd() {
	let res = await userService.modifyPwd('admin', '123456', '1234567');
	console.log(res);
}

async function modifyUserName() {
	let res = await userService.modifyUserInfo('adminn', { username: '60rzvvbj' });
	console.log(res);
}

async function createProject() {
	let res = await projectService.addProject('admin', '项目5');
	console.log(res);
}

async function modifyProjectName() {
	let res = await projectService.modifyProjectName('10008', '第四个项目');
	console.log(res);
}

async function updateContent() {
	let res = await projectService.updateContent('10008', JSON.stringify({ a: 123 }));
	console.log(res);
}

async function getUserProject() {
	let res = await projectService.getUserProject('adminn');
	console.log(res);
}

async function getProjectInfo() {
	let res = await projectService.getProjectInfo('10001');
	console.log(res);
}

async function getProjectContent() {
	let res = await projectService.getProjectContent('10008');
	console.log(res);
}

async function deleteProject() {
	let res = await projectService.deleteProject('10008');
	console.log(res);
}

async function test() {
    await register();
	process.exit();
}

test();
